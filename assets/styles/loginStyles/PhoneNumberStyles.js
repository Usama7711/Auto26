import { StyleSheet } from "react-native";

export default StyleSheet.create({
    BackArrow: {
        // resizeMode: 'stretch',
    },
    MainPhoneWraper:{
        display:'flex',
        justifyContent:"space-between",
        height:'100%',
    },
    TopSection:{
        borderb:1,
        borderColor:'red',
        marginBottom:30
    },
    HeadingTeaxt:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        marginBottom:20
    },
    SubHeadingText:{
        color:'grey',
        fontSize:15,
        marginBottom:20
    },
    ResndOTPSection:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        marginTop:20
    },
    ResnedText:{
        width:'50%',
        color:'blue',
        fontSize:18,
    },
    ResnedText2:{
        width:'50%',
        color:'blue',
        fontSize:18,
        textAlign:'right'
    },

})