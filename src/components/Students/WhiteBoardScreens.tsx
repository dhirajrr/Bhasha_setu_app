import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

const WhiteBoardScreen = (): React.JSX.Element => {
  const [paths, setPaths] = useState<any[]>([]);
  const [shapes, setShapes] = useState<any[]>([]);
  const [currentPath, setCurrentPath] = useState<any>(null);
  const [penColor, setPenColor] = useState<string>('#00FF00');
  const [drawingShape, setDrawingShape] = useState<string>('free');
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);

  const handleStart = (e: any) => {
    const { locationX, locationY } = e.nativeEvent;
    setCurrentPath({
      points: [`${locationX},${locationY}`],
    });
  };

  const handleMove = (e: any) => {
    const { locationX, locationY } = e.nativeEvent;
    if (currentPath) {
      const newPath = { ...currentPath };
      newPath.points.push(`${locationX},${locationY}`);
      setCurrentPath(newPath);
    }
  };

  const handleEnd = () => {
    if (currentPath) {
      if (drawingShape === 'free') {
        setPaths([...paths, currentPath]);
      } else {
        setShapes([...shapes, currentPath]);
      }
      setCurrentPath(null);
    }
  };

  const clearCanvas = () => {
    setPaths([]);
    setShapes([]);
    Alert.alert('Canvas Cleared', 'All drawings have been erased.');
  };

  const changePenColor = (color: string) => {
    setPenColor(color);
    setOptionsVisible(false);
  };

  const changeShape = (shape: string) => {
    setDrawingShape(shape);
    setOptionsVisible(false);
  };

  const renderPaths = () => {
    return paths.map((path, index) => {
      const pathString = path.points.join(' ');
      return <Path key={index} d={`M ${pathString}`} stroke={penColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />;
    });
  };

  const renderShapes = () => {
    return shapes.map((shape, index) => {
      const [startX, startY] = shape.points[0].split(',').map(Number);
      if (shape.shapeType === 'circle') {
        const radius = Math.abs(Number(shape.points[shape.points.length - 1].split(',')[0]) - startX);
        return <Circle key={index} cx={startX} cy={startY} r={radius} stroke={penColor} strokeWidth={2} fill="transparent" />;
      }

      if (shape.shapeType === 'rectangle') {
        const endX = Number(shape.points[shape.points.length - 1].split(',')[0]);
        const endY = Number(shape.points[shape.points.length - 1].split(',')[1]);
        return <Rect key={index} x={Math.min(startX, endX)} y={Math.min(startY, endY)} width={Math.abs(endX - startX)} height={Math.abs(endY - startY)} stroke={penColor} strokeWidth={2} fill="transparent" />;
      }
    });
  };

  const renderShape = () => {
    if (drawingShape === 'circle' && currentPath) {
      const [startX, startY] = currentPath.points[0].split(',').map(Number);
      const radius = Math.abs(Number(currentPath.points[currentPath.points.length - 1].split(',')[0]) - startX);
      return <Circle cx={startX} cy={startY} r={radius} stroke={penColor} strokeWidth={2} fill="transparent" />;
    }

    if (drawingShape === 'rectangle' && currentPath) {
      const [startX, startY] = currentPath.points[0].split(',').map(Number);
      const endX = Number(currentPath.points[currentPath.points.length - 1].split(',')[0]);
      const endY = Number(currentPath.points[currentPath.points.length - 1].split(',')[1]);
      return <Rect x={Math.min(startX, endX)} y={Math.min(startY, endY)} width={Math.abs(endX - startX)} height={Math.abs(endY - startY)} stroke={penColor} strokeWidth={2} fill="transparent" />;
    }
  };

  return (
    <View style={styles.container}>
      <Svg
        style={styles.canvas}
        onStartShouldSetResponder={() => true}
        onResponderGrant={handleStart}
        onResponderMove={handleMove}
        onResponderRelease={handleEnd}
      >
        {renderPaths()}
        {renderShapes()}
        {renderShape()}
        {currentPath && drawingShape === 'free' && (
          <Path
            d={`M ${currentPath.points.join(' ')}`}
            stroke={penColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </Svg>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearCanvas}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.optionsButton]} onPress={() => setOptionsVisible(!optionsVisible)}>
            <Text style={styles.buttonText}>Options</Text>
          </TouchableOpacity>
        </View>
        {optionsVisible && (
          <ScrollView style={styles.optionsContainer}>
            <View style={styles.colorButtons}>
              <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#00FF00' }]} onPress={() => changePenColor('#00FF00')} />
              <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#FF0000' }]} onPress={() => changePenColor('#FF0000')} />
              <TouchableOpacity style={[styles.colorButton, { backgroundColor: '#0000FF' }]} onPress={() => changePenColor('#0000FF')} />
            </View>
            <View style={styles.shapeButtons}>
              <TouchableOpacity style={styles.shapeButton} onPress={() => changeShape('free')}>
                <Text style={styles.buttonText}>Free Draw</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shapeButton} onPress={() => changeShape('circle')}>
                <Text style={styles.buttonText}>Circle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shapeButton} onPress={() => changeShape('rectangle')}>
                <Text style={styles.buttonText}>Rectangle</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5c5c5c',
  },
  canvas: {
    flex: 1,
    width: '100%',
    height: '86%',
    borderWidth: 2,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#000',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    height: 50,
  },
  clearButton: {
    backgroundColor: '#E74C3C',
  },
  optionsButton: {
    backgroundColor: '#3498DB',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 60, // Position above the buttons row
    width: '100%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#34495E',
    zIndex: 1000,
  },
  colorButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  shapeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  shapeButton: {
    padding: 10,
    backgroundColor: '#3498DB',
    borderRadius: 8,
    width: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default WhiteBoardScreen;
