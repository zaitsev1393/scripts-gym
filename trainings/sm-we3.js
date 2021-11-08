class PageWithStatus {
  public stateMachine: any;
  constructor() {
    this.stateMachine = new StateMachine({ 
      standby: { 
        transitions: ['initializing', 'connecting'],
        on: () => {},
        init: 'initializing',
        resume: 'connecting',
      },
      initializing: {
        transitions: ['standby', 'connecting'],
        on: async () => {
          await this.init();
          return 'connecting';
        },
        pause: 'standby'
      },
      connecting: {
        transitions: ['standby', 'connected', 'offline'],
        on: () => {
          return new Promise( async (resolve, reject) => {
            await this.onConnecting();
            const connected = true;
            resolve(connected ? 'connected' : 'offline');
          });
        },
        pause: 'standby'
      },
      connected: {
        transitions: ['standby', 'offline', 'disconnected'],
        on: async () => {
          try {
            // let data = await this.loadData();
            // this.onDidLoadData(data);
            // this.isOnline = true;
            await this.onConnected();
            // this.offlineSource.next(false);
          } catch (e) {
            return 'offline';
          }
        },
        pause: () => {
          // this.onPause();
          return 'standby'
        },
        disconnect: 'disconnected',
      },
      disconnected: {
        transitions: ['offline'],
        on: async () => {
          // this.onDisconnected();
          return 'offline';
        }
      },
      offline: {
        transitions: ['connecting', 'standby', 'offline'],
        on: async () => {
          // this.offlineSource.next(true);
        },
        pause: 'standby',
        resume: 'connecting',
        disconnect: 'offline'
      },
    });
  }

  init() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1500);
    });
  }


  locker = false;
  onConnecting() {
    return new Promise((resolve, reject) => {
      if(!this.locker) {
        this.stateMachine.exec('pause');
        setTimeout(() => {
          this.stateMachine.exec('resume');  
          this.locker = true;
        }, 1000)  
      }
      setTimeout(() => resolve(), 2000)
    })
  }

  onConnected() {
    return new Promise((resolve, reject) => {
      // this.stateMachine.exec('pause');
      setTimeout(() => resolve(), 1000)
    })
  }

}

class StateMachine {
  public states: any = {};
  public running: boolean = false;
  public currentEvent: string = '';
  public identifier: string = '';
  public state: string = ''; // current state
  private queue: Array<any> = [];
  public env: any = {};
  public instanceId: any = 0;

  constructor(states:any, identifier: string = '') {
    this.instanceId++;

    if( Object.keys(states).length <= 0 ) { throw "Error, no states provided" }
    this.states = states;
    this.state = 'standby';
    this.identifier = identifier;

    //Identifier for console logs if none specified
    this.setIdentifier(identifier);
  }

  setIdentifier(identifier: string) {
    if(identifier) {
      this.identifier = identifier
    } else {
      const no = Math.round(Math.random() * (1 - 1000) + 1);
      this.identifier = `SM${no}`;
    }
  }

  public systemEvents = ['pause', 'resume'];
  isSystemEvent( ev ) {
    return this.systemEvents.includes( ev );
  }

  async exec(ev: string, context = {}, lastTry = false): Promise<void> {
    return new Promise(async (resolve, reject) => {
      let func = this.states[this.state][ev];
      if(this.isAlreadyRunning(ev)) {
        this.log(`skipped ${ev}, already running`);
        return false;
      } else if (this.running) { //If we are running something else
        if(!lastTry || ev == 'pause') {
          this.queue.push({
            event: ev, 
            context: context, 
            isSystemEvent:  ev == 'pause'
          });
        } else {
          this.log(`ignored ${ev} (running)`);
        }
        return false;
      } else if (!func) { // no function defined
        if(!lastTry) {
          this.queue.push({ event: ev, context: context });
        } else {
          this.log(`ignored ${ev} (no func)`);
        }
        return false;
      }

      this.onWillRun(ev, context);
      func = this.prepareFunction(func, context);
      const newState = await func(context);
      await this.onDidRun(newState, ev, context);

      resolve();
    });
  }

  onWillRun(ev, context) {
    this.currentEvent = ev;
    this.running = true;
  }

  prepareFunction(event, context) {
    const val = event;
    if(typeof(event) === 'string') { event = _ => val }
    return event;
  }

  async onDidRun(newState, ev, context) {
    this.log(`${this.state} executed ${ev}, -> ${ newState }`);
    // if(newState && !this.states[this.state].transitions.includes( newState )) return;

    let prevState = this.state;

    this.running = false;
    this.currentEvent = '';

    if(newState) {
      //transition
      if(newState != prevState) {
        this.state = newState;
        this.log(`transitioned from ${ prevState } to ${ newState }`);
        if(this.queue.find(event => event.isSystemEvent)) {
          console.log('onDidRun queue...');
          return this.runFromQueue();
        } else {
          await this.exec('on', context);//activate new state    
        }
        
      }
    }

    await this.runFromQueue();
  }

  isAlreadyRunning(event) {
    return this.running && event == this.currentEvent;
  }

  async runFromQueue() {
    if(this.queue.length > 0) {
      console.log('runFromQueue() queue...', this.queue.length, this.queue.map(e => e.event));
      let q = this.queue.shift();
      this.log('running from queue', q);
      const lastTry = true;
      await this.exec(q.event, q.context, lastTry);
    }
  }

  log(str, p = null) {
    if(p) {
      console.log(`${this.identifier} ${str}`, p);
    } else {
      console.log(`${this.identifier} ${str}`);
    }
  }
}


let pws = new PageWithStatus();

pws.stateMachine.exec('init');