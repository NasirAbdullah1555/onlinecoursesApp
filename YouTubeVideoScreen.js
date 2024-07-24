import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const YouTubeVideoScreen = ({ navigation }) => {
  const [selectedWeek, setSelectedWeek] = useState(1); // Start with Week 1
  const [selectedOption, setSelectedOption] = useState(0); // Initialize with no option selected
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [assignmentCompleted, setAssignmentCompleted] = useState(false);
  const [completedAllWeeks, setCompletedAllWeeks] = useState(false); // New state



  const handleWeekClick = (index) => {
    setSelectedWeek(index);
  };

  const handleQuizCompletion = () => {
    setQuizCompleted(true);
  };

  const handleAssignmentCompletion = () => {
    setAssignmentCompleted(true);
  };

  const goToNextWeek = () => {
    if (selectedWeek < 7) {
      if (quizCompleted && assignmentCompleted) {
        const nextWeek = selectedWeek + 1;
        setSelectedWeek(nextWeek);
        setSelectedOption(0);
      } else {
        alert(`Complete Week ${selectedWeek} tasks before moving to Week ${selectedWeek + 1}.`);
      }
    } else {
      alert('You have completed all available weeks.Now Apply for Certificate');
      
        // All weeks are completed
        navigation.navigate('CertificateScreen');
      
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YouTube Video Lectures</Text>
      <TouchableOpacity
        onPress={() => handleWeekClick(1)}
        style={[
          styles.weekButton,
          { opacity: selectedWeek === 1 ? 1 : 0.5 },
        ]}
      >
        <Text style={styles.weekTitle}>Week 1: Link to Week 1 Video</Text>
        {selectedWeek === 1 && (
          <View style={styles.dropdownContainer}>
            <Text>Dropdown Menu:</Text>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
              <Picker.Item label="Select an option" value={0} />
              <Picker.Item label="Quiz" value={1} />
              <Picker.Item label="Assignment" value={2} />
            </Picker>
            {selectedWeek === 1 && selectedOption === 1 && !quizCompleted && (
              <TouchableOpacity onPress={handleQuizCompletion}>
                <Text>Complete Quiz for Week 1</Text>
              </TouchableOpacity>
            )}
            {selectedWeek === 1 && selectedOption === 2 && !assignmentCompleted && (
              <TouchableOpacity onPress={handleAssignmentCompletion}>
                <Text>Complete Assignment for Week 1</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </TouchableOpacity>
     


<TouchableOpacity
        onPress={() => handleWeekClick(2)}
        style={[
          styles.weekButton,
          { opacity: selectedWeek === 2 ? 2 : 0.5 },
        ]}
      >
        <Text style={styles.weekTitle}>Week 2: Link to Week 2 Video</Text>
        {selectedWeek === 2 && (
          <View style={styles.dropdownContainer}>
            <Text>Dropdown Menu:</Text>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
              <Picker.Item label="Select an option" value={0} />
              <Picker.Item label="Quiz" value={1} />
              <Picker.Item label="Assignment" value={2} />
            </Picker>
            {selectedWeek === 2 && selectedOption === 1 && !quizCompleted && (
              <TouchableOpacity onPress={handleQuizCompletion}>
                <Text>Complete Quiz for Week 2</Text>
              </TouchableOpacity>
            )}
            {selectedWeek === 2 && selectedOption === 2 && !assignmentCompleted && (
              <TouchableOpacity onPress={handleAssignmentCompletion}>
                <Text>Complete Assignment for Week 2</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </TouchableOpacity>
      
   

    <TouchableOpacity
        onPress={() => handleWeekClick(3)}
        style={[
          styles.weekButton,
          { opacity: selectedWeek === 3 ? 3 : 0.5 },
        ]}
      >
        <Text style={styles.weekTitle}>Week 3: Link to Week 3 Video</Text>
        {selectedWeek === 3 && (
          <View style={styles.dropdownContainer}>
            <Text>Dropdown Menu:</Text>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
              <Picker.Item label="Select an option" value={0} />
              <Picker.Item label="Quiz" value={1} />
              <Picker.Item label="Assignment" value={2} />
            </Picker>
            {selectedWeek === 3 && selectedOption === 1 && !quizCompleted && (
              <TouchableOpacity onPress={handleQuizCompletion}>
                <Text>Complete Quiz for Week 3</Text>
              </TouchableOpacity>
            )}
            {selectedWeek === 3 && selectedOption === 2 && !assignmentCompleted && (
              <TouchableOpacity onPress={handleAssignmentCompletion}>
                <Text>Complete Assignment for Week 3</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </TouchableOpacity>
    
    
    <TouchableOpacity
        onPress={() => handleWeekClick(4)}
        style={[
          styles.weekButton,
          { opacity: selectedWeek === 4 ? 4 : 0.5 },
        ]}
      >
        <Text style={styles.weekTitle}>Week 4: Link to Week 4 Video</Text>
        {selectedWeek === 4 && (
          <View style={styles.dropdownContainer}>
            <Text>Dropdown Menu:</Text>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
              <Picker.Item label="Select an option" value={0} />
              <Picker.Item label="Quiz" value={1} />
              <Picker.Item label="Assignment" value={2} />
            </Picker>
            {selectedWeek === 4 && selectedOption === 1 && !quizCompleted && (
              <TouchableOpacity onPress={handleQuizCompletion}>
                <Text>Complete Quiz for Week 4</Text>
              </TouchableOpacity>
            )}
            {selectedWeek === 4 && selectedOption === 2 && !assignmentCompleted && (
              <TouchableOpacity onPress={handleAssignmentCompletion}>
                <Text>Complete Assignment for Week 4</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </TouchableOpacity>
     

   
     <TouchableOpacity
        onPress={() => handleWeekClick(5)}
        style={[
          styles.weekButton,
          { opacity: selectedWeek === 5 ? 5 : 0.5 },
        ]}
      >
        <Text style={styles.weekTitle}>Week 5: Link to Week 5 Video</Text>
        {selectedWeek === 5 && (
          <View style={styles.dropdownContainer}>
            <Text>Dropdown Menu:</Text>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
              <Picker.Item label="Select an option" value={0} />
              <Picker.Item label="Quiz" value={1} />
              <Picker.Item label="Assignment" value={2} />
            </Picker>
            {selectedWeek === 5 && selectedOption === 1 && !quizCompleted && (
              <TouchableOpacity onPress={handleQuizCompletion}>
                <Text>Complete Quiz for Week 5</Text>
              </TouchableOpacity>
            )}
            {selectedWeek === 5 && selectedOption === 2 && !assignmentCompleted && (
              <TouchableOpacity onPress={handleAssignmentCompletion}>
                <Text>Complete Assignment for Week 5</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </TouchableOpacity>
     

      <TouchableOpacity
        onPress={() => handleWeekClick(6)}
        style={[
          styles.weekButton,
          { opacity: selectedWeek === 6 ? 6 : 0.5 },
        ]}
      >
        <Text style={styles.weekTitle}>Week 6: Link to Week 6 Video</Text>
        {selectedWeek === 6 && (
          <View style={styles.dropdownContainer}>
            <Text>Dropdown Menu:</Text>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
              <Picker.Item label="Select an option" value={0} />
              <Picker.Item label="Quiz" value={1} />
              <Picker.Item label="Assignment" value={2} />
            </Picker>
            {selectedWeek === 6 && selectedOption === 1 && !quizCompleted && (
              <TouchableOpacity onPress={handleQuizCompletion}>
                <Text>Complete Quiz for Week 6</Text>
              </TouchableOpacity>
            )}
            {selectedWeek === 6 && selectedOption === 2 && !assignmentCompleted && (
              <TouchableOpacity onPress={handleAssignmentCompletion}>
                <Text>Complete Assignment for Week 6</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </TouchableOpacity>
      {/* Similar code for other weeks */}

      


      
      <TouchableOpacity
        onPress={() => handleWeekClick(7)}
        style={[
          styles.weekButton,
          { opacity: selectedWeek === 7 ? 7 : 0.5 },
        ]}
      >
        <Text style={styles.weekTitle}>Week 7: Link to Week 7 Video</Text>
        {selectedWeek === 7 && (
          <View style={styles.dropdownContainer}>
            <Text>Dropdown Menu:</Text>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
              <Picker.Item label="Select an option" value={0} />
              <Picker.Item label="Quiz" value={1} />
              <Picker.Item label="Assignment" value={2} />
            </Picker>
            {selectedWeek === 7 && selectedOption === 1 && !quizCompleted && (
              <TouchableOpacity onPress={handleQuizCompletion}>
                <Text>Complete Quiz for Week 7</Text>
              </TouchableOpacity>
            )}
            {selectedWeek === 7 && selectedOption === 2 && !assignmentCompleted && (
              <TouchableOpacity onPress={handleAssignmentCompletion}>
                <Text>Complete Assignment for Week 7</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        <TouchableOpacity style={styles.nextWeekButton} onPress={goToNextWeek}>
        <Text>Next Week</Text>
      </TouchableOpacity>
      </TouchableOpacity>


      {completedAllWeeks && (
        <TouchableOpacity style={styles.certificateButton} onPress={handleViewCertificate}>
          <Text>View Certificate</Text>
        </TouchableOpacity>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  certificateButton: {
    backgroundColor: 'red', // Change the color as needed
    padding: 10,
    borderRadius: 5,
    marginTop: 20, // Adjust the margin as needed
  },

  weekButton: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  weekTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    marginTop: 10,
  },
  nextWeekButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default YouTubeVideoScreen;
