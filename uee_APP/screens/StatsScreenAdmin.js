import { useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { useAppContext } from "../context/appContext";
import { useIsFocused } from "@react-navigation/core";

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
                Grade 7 :{SubjectCount("Grade 7")}
              </Text>
              <Text style={styles.userText}>
                Grade 8 : {SubjectCount("Grade 8")}
              </Text>
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

        <Text style={styles.headingText}>Monthly User Creation</Text>
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
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            y
            chartConfig={{
              backgroundColor: "#e26a00",
              strokeWidth: 0,
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
              borderRadius: 16,
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
    backgroundColor: "#200364",
    flex: 1,
  },
  statstext: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
  },

  chartContainer: {
    marginTop: 10,
    marginBottom: 60,
  },
  headingText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    marginTop: 30,
  },
  totalUsers: {
    width: 390,
    height: 100,
    backgroundColor: "#57c98c",
    marginTop: 20,
    borderRadius: 10,
  },
  totalUsersText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },

  userContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subjectContainer: {
    height: 260,
  },
  userText: {
    fontSize: 22,
    minWidth: 120,
    marginHorizontal: 30,
    marginVertical: 4,
  },
  totalSubRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    justifyContent: "space-between",
  },
});
