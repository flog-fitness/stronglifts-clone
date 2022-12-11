import { isTSMethodSignature } from "@babel/types";
import React from "react";
import { View, StyleSheet, Text, FlatList, ListRenderItem } from "react-native";
import Exercise from "../models/Exercise";
import Workout from "../models/Workout";

interface WorkoutProps {
	workout: Workout;
}
export default function WorkoutComponent({ workout }: WorkoutProps) {
	const renderItem: ListRenderItem<Exercise> = ({ item }) => {
		return (
			<View style={styles.exerciseContainer}>
				<Text style={styles.exerciseText}>{item.name}</Text>
				<Text style={styles.exerciseText}>
					{item.sets} x {item.reps}{" "}
					{`${item.weight}${item.weight === "BW" ? "" : "lbs"}`}
				</Text>
			</View>
		);
	};
	return (
		<View style={styles.container}>
			<View style={[styles.headerContainer, { marginBottom: 5 }]}>
				<Text style={styles.titleText}>{workout.name}</Text>
				<Text style={styles.titleText}>{workout.scheduled.toDateString()}</Text>
			</View>
			<FlatList
				data={workout.exercises}
				renderItem={renderItem}
				ItemSeparatorComponent={() => {
					return <View style={styles.separator} />;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#232425",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 6,
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	exerciseContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 3,
	},
	titleText: {
		color: "#9B9DA4",
		fontSize: 13,
	},
	exerciseText: {
		color: "#fff",
		fontSize: 15,
	},
	separator: {
		backgroundColor: "#47484B",
		height: 1,
	},
});
