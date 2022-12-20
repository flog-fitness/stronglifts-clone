export default interface Exercise {
	name: string;
	sets: number;
	reps: number;
	weight: number | "BW";
}
