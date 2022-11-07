import { useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";

import { useAppContext } from "../context/appContext";
import { useIsFocused } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";

const StatsScreenAdmin = () => {
  const {
    adminShowStats,
    adminStats,
    monthelUserCreations,
    getAllSubjects,
    subjects,
    getAllUsers,
    users,
  } = useAppContext();
  const isFocused = useIsFocused();

  // const mydata = [
  //   { date: "dec", count: 2 },
  //   { date: "lk", count: 4 },
  //   { date: "lkkl", count: 3 },
  //   { date: "lke", count: 1 },
  //   { date: "lkss", count: 5 },
  //   { date: "lscl", count: 6 },
  // ];

  const date = monthelUserCreations.map((item) => {
    return item.date;
  });

  const value = monthelUserCreations.map((pl) => {
    return pl.count;
  });

  //get subject count
  const SubjectCount = (Grade) => {
    const datalk = subjects.filter(function (item) {
      return item.gID === Grade;
    }).length;
    return datalk;
  };

  //get user count
  const userCount = (type) => {
    const datalk = users.filter(function (item) {
      return item.type === type;
    }).length;
    return datalk;
  };

  useEffect(() => {
    if (isFocused) {
      adminShowStats();
      getAllSubjects();
      getAllUsers();
    }
  }, [isFocused]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.statstext}>APP STATISTICS</Text>
        <View style={styles.totalUsers}>
          <Text style={styles.totalUsersText}>Total users</Text>
          <View style={styles.userContainer}>
            <Text style={styles.userText}>
              Teachers : {userCount("teacher")}
            </Text>
            <Text style={styles.userText}>
              Students : {userCount("student")}
            </Text>
          </View>
        </View>

        <View style={[styles.totalUsers, styles.subjectContainer]}>
          <Text style={styles.totalUsersText}>Total subjects</Text>
          <View style={styles.userContainer}>
            <View style={styles.totalSubRow}>
              <Text style={styles.userText}>
                Grade 5 : {SubjectCount("Grade 5")}
              </Text>
              <Text style={styles.userText}>
                Grade 6 : {SubjectCount("Grade 6")}
              </Text>
              <Text style={styles.userText}>
                Grade 7 : {SubjectCount("Grade 7")}
              </Text>
              <Text style={styles.userText}>Grade 8 : 40</Text>
              <Text style={styles.userText}>
                Grade 9 : {SubjectCount("Grade 9")}
              </Text>
              <Text style={styles.userText}>
                Grade 10 : {SubjectCount("Grade 10")}
              </Text>
              <Text style={styles.userText}>
                Grade 11 : {SubjectCount("Grade 11")}
              </Text>
              <Text style={styles.userText}>
                Grade 12 : {SubjectCount("Grade 12")}
              </Text>
              {/* <Text style={styles.userText}>
                Grade 13 : {usersCount("Grade 13")}
              </Text> */}
            </View>
          </View>
        </View>

        <Text style={styles.headingText}>MONTHLY USER CREATION</Text>
        <View style={styles.chartContainer}>
          <LineChart
            data={{
              labels: date,
              datasets: [
                {
                  data: value,
                },
              ],
            }}
            width={390} // from react-native
            height={320}
            yAxisInterval={1} // optional, defaults to 1
            y
            chartConfig={{
              backgroundColor: "#e26a00",
              strokeWidth: 0,
              backgroundGradientFrom: "#cfb7ed",
              backgroundGradientTo: "#cfb7ed",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "5",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default StatsScreenAdmin;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#8208E2",
    flex: 1,
  },
  statstext: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    textDecorationLine: "underline",
  },

  chartContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  headingText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    marginTop: 30,
    textDecorationLine: "underline",
  },
  totalUsers: {
    width: 390,
    height: 100,
    backgroundColor: "#cfb7ed",
    marginTop: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    justifyContent: "center",
    alignItems: "center",
  },
  totalUsersText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#8208E2",
    fontSize: 22,
  },

  userContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subjectContainer: {
    height: 200,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  userText: {
    fontSize: 22,
    minWidth: 130,
    marginHorizontal: 25,
    marginVertical: 4,
    fontWeight: "bold",
    color: "black",
  },
  totalSubRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    justifyContent: "space-between",
  },
  container2: {
    backgroundColor: "red",
    flex: 1,
  },
});
