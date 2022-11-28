interface SequenceElement {
	wait: number;
	run: Function;
}
  
type IntervalSequence = Array<SequenceElement>
  
  
export const performSequentially = (sequence: IntervalSequence) => {
	for(let x = sequence.length - 1; x >= 0; x--) {
		for(let y = x - 1; y >= 0; y--) {
			sequence[x].wait += sequence[y].wait;
		}
	}

	sequence.forEach(e => setTimeout(e.run, e.wait));
}
