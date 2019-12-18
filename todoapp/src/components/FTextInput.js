import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const FTextInput = (props) => {
 
    const { input, meta: { touched, error }, ...inputProps } = props;    
    
    return (
        <View>
            <TextInput
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
            />
            {touched && (error && <Text style={styles.formError}>{error}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
  formError: {
    color: 'red'
  }
});

export default FTextInput
