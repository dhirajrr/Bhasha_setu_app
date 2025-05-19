import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [50, 60, 70, 80, 90, 100],
    },
  ],
};

const barData = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    {
      data: [30, 40, 50, 60],
    },
  ],
};

const pieData = [
  { name: 'Red', population: 50, color: 'red', legendFontColor: 'black', legendFontSize: 15 },
  { name: 'Blue', population: 30, color: 'blue', legendFontColor: 'black', legendFontSize: 15 },
  { name: 'Green', population: 20, color: 'green', legendFontColor: 'black', legendFontSize: 15 },
];

const InteractiveCharts = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Learn with Interactive Charts</Text>

      {/* Line Chart Section */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Line Chart: Monthly Sales</Text>
        <LineChart
          data={data}
          width={300}
          height={220}
          chartConfig={styles.chartConfig}
          style={styles.chart}
        />
        <Text style={styles.chartDescription}>
          A Line Chart shows trends over time. Here, the chart shows sales from January to June.
        </Text>
      </View>

      {/* Bar Chart Section */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Bar Chart: Category Comparison</Text>
        <BarChart
          data={barData}
          width={300}
          height={220}
          chartConfig={styles.chartConfig}
          style={styles.chart}
        />
        <Text style={styles.chartDescription}>
          A Bar Chart compares categories using bars of different heights. Here, we compare four categories (A, B, C, D).
        </Text>
      </View>

      {/* Pie Chart Section */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Pie Chart: Distribution</Text>
        <PieChart
          data={pieData}
          width={300}
          height={220}
          chartConfig={styles.chartConfig}
          accessor="population"
          style={styles.chart}
        />
        <Text style={styles.chartDescription}>
          A Pie Chart shows parts of a whole. The slices represent percentages of the total data.
        </Text>
      </View>

      {/* Buttons for more info */}
      <View style={styles.buttonContainer}>
        <Button
          title="See How a Line Chart Works"
          onPress={() => alert("A Line Chart displays trends over time using points connected by lines.")}
        />
        <Button
          title="See How a Bar Chart Works"
          onPress={() => alert("A Bar Chart displays data using bars of varying lengths to represent values.")}
        />
        <Button
          title="See How a Pie Chart Works"
          onPress={() => alert("A Pie Chart shows the proportional size of parts relative to the whole, like slices of a pie.")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'gray',
  },
  chartDescription: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  chartConfig: {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#ff5858',
    backgroundGradientTo: '#e26a00',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  },
  chart: {
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default InteractiveCharts;
