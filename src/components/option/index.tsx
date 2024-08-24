import {useEffect} from 'react'
import { Pressable, PressableProps, Text} from 'react-native';
import Animated, {[
  useSharedValue, 
  useAnimetedStyle, 
  interpolate, 
  Extrapolation,
  withTiming,
}
from 'react-native-reanimated';
import {styles} from './styles';
import {House} from 'phosphor-react-native'; 

const AnimatedPressable = Animated.createAnimatedComponet(Pressable)

type Props = PressableProps & {
  title: string
  icon: keyof typeof House
  isSelected: boolean
}

export function Option ({title, Icon, isSelected,...rest}: Props) {
  
  const animationStatus = useSharedValue(0);
  const animatedPressableStyle = useAnimetedStyle(() => ({
    width: interpolate(
      animationStatus.value,
      [0,1], 
      [42, 144],
      Extrapolation.CLAMP
      ),
  }));
  const animatedTitleStyle = useAnimetedStyle(() => ({
    opacity: animationStatus.value 
  })
  
  useEffect(() => {
    animationStatus.value = withTiming(isSelected ? 1 : 0);
  },[isSelected])
  
  return (
    <AnimatedPressable style={[styles.container, animatedPressableStyle]} {...rest}>
      <Icon size={30} />
      <Animated.Text style={[styles.title, animatedTitleStyle]}>
        {title}
      <Animated.Text/>
    <AnimatedPressable/>
  )
}