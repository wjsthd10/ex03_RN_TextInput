import React,{Component} from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, Alert } from 'react-native';

class MainComponent extends Component{

    // 변수값이 변경될때 화면갱신도 가능하게 하려면 state를 사용해야한다.
    state={
        msg:"output",
        
    };
    // state에 저장하면 변경될때마다 계속 저장되기 때문에 일반 멤버로 생성한다.
    data="";

    // TextInput의 글씨가 변경될때 마다 발동하는 메소드
    changeText=(m)=>{// 파라미터로 TextInput에 써있는 글씨가 value값으로 전달된다. 자동으로 
        // Alert.alert('changed : '+m);
        this.setState({msg:m})// 화면갱신을 위해서 setState({}) 사용
        // state값을 대입연산자로 변경하면 자동갱신 안됨.
    };

    // 실행문 축약형 {}를 사용하지 않아도 된다.(파라미터)도 생략가능하다. 함수임
    change=value=>this.data=value;
    

    // ###복습 : 새로배움 파라미터로 값 받는것
    // 완료벼튼을 눌렀을때 발동
    // 파라미터 : 완료이벤트 객체가 리턴된다.
    onSubmit=(submitEvent)=>{
        let value=submitEvent.nativeEvent.text;
        // Alert.alert(value)
        this.setState({msg:value});
    };

    // 
    clickBtn=()=>this.setState({msg:this.data});

    render(){// 이 컴포넌트가 화면에 그려내는 작업 메소드 렌더링에서 따옴 ===> js에서는 class안에서 function사용하면 에러
        return(
            <View style={styles.root}>
                {/* multiline을 true로 사용하면 submit버튼이 사라진다. */}
                <TextInput multiline={true} numberOfLines={4} style={styles.textInput} onChangeText={this.change} onSubmitEditing={this.onSubmit}>{this.state.msg}</TextInput>
                {/* ###  value=>this.data=value : 파라미터로 받은 값을 함수로 this.data에 value값을 this.data에 대입한다.    */}
                <Text style={styles.text}>{this.state.msg}</Text>
                {/* 스타일을 적용할때 하나만 적용할 것이라면 {} 안에 js문법을 사용하겠다는 {}를 사용하여 스타일 요소 적용 */}
                <View style={{marginTop:10}}>
                                                          {/* 함수 호출 */}
                    <Button title="submit Button" onPress={this.clickBtn}></Button>
                                                          {/* 함수 정의 */}
                    <Button title="submit Button" onPress={()=>this.setState({msg:this.data})}></Button>
                </View>
            </View>
        );
    }//render method...
}// MainComponent...


const styles=StyleSheet.create({
    root:{
        padding:16,
        backgroundColor:'#ffff2233',
        flex:1,
    },
    text:{
        fontSize:20,
        color:"#334422",
        fontWeight:"bold",
        margin:16,
    },
    textInput:{
        borderWidth:2,
        borderColor:"green",
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:16,
        paddingRight:16,
    },
    button:{
        marginTop:16,
    }
});

// MainComponent클래스를 다른 .js문서에서 인식할 수 있도록 추출=export
export default MainComponent;