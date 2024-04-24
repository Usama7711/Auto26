import { StyleSheet } from "react-native"


export default StyleSheet.create({
  commonButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  validButton:{
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    textAlign:'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cx_Main: {
    padding: 20
  },
  commmonInput: {
    // height: ,
    // margin: 12,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor:'black',
    padding: 10,
    fontSize:20,
    borderRadius:10
  },
  errorText:{
    fontSize:16,
    color:'red'
  },
})