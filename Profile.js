import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import Hyperlink from 'react-native-hyperlink';

const Profile = ({ navigation }) => {
  const [isInClass, setIsInClass] = useState(false);
  const [classStartTime, setClassStartTime] = useState(0);
  const [classWatchTime, setClassWatchTime] = useState(0);
  const [totalWatchTime, setTotalWatchTime] = useState(0);

  const startClass = () => {
    setIsInClass(true);
    setClassStartTime(Date.now());
  };

  const endClass = () => {
    setIsInClass(false);
    const currentTime = Date.now();
    const elapsedMilliseconds = currentTime - classStartTime;
    setClassWatchTime(classWatchTime + elapsedMilliseconds);
    setTotalWatchTime(totalWatchTime + elapsedMilliseconds);
  };

  useEffect(() => {
    if (isInClass) {
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedMilliseconds = currentTime - classStartTime;
        setClassWatchTime(elapsedMilliseconds);
      }, 1000); // Update watch time every second

      return () => clearInterval(interval);
    }
  }, [isInClass, classStartTime]);

  const isPresent = totalWatchTime >= 45 * 60 * 1000; // 45 minutes in milliseconds

  return (
    <View style={styles.container}>
      <Text>Hyper link open in browser</Text>
      {isInClass ? (
        <Button title="End Class" onPress={endClass} />
      ) : (
        <Button title="Join Class" onPress={startClass} />
      )}
      <Text style={styles.sectiontitle}>
        {isPresent ? 'Attendance Recorded' : 'Not Present'}
      </Text>
      <Text style={styles.watchTime}>
        Total Watch Time: {Math.floor(totalWatchTime / 1000)} seconds
      </Text>
      <Hyperlink linkDefault={true}>
        <Text style={styles.link}>
          Please click on this link to join the online class:
        </Text>
        <Text style={styles.link}>https://meet.google.com/zwd-tems-vqk</Text>
        <Button
        title="YouTube Video"
        onPress={() => navigation.navigate('SelectCourses')}
      />
      </Hyperlink>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  sectiontitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    textAlign: 'center',
  },
  watchTime: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Profile;
