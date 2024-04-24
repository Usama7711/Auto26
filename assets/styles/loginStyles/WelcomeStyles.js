import { StyleSheet } from "react-native"


export default StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    MainWrap: {
        justifyContent: 'space-between',
        alignItems:"center",
        height: "100%",
        paddingTop: 80,
        paddingBottom: 80,
        alignContent: 'space-between',
    },
    GreatingText:{
        fontSize:25,
        fontWeight:'600',
        color:"black",
        paddingBottom:20,
    },
    SubBrand:{
        color:"yellow"
    },  
    BrandName: {
        width:'80%',
        fontSize: 30,
        fontWeight: '700',
        color: "yellow",
        backgroundColor: "black",
        padding: 20,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        // fontStyle:
    }

})