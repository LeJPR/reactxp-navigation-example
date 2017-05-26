/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');




const styles = {
    tabStyle: RX.Styles.createViewStyle({
        backgroundColor: '#fff',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    contentStyle: RX.Styles.createTextStyle({
        color: 'purple',
        width:200,
        textAlign:'center'
    })
};

class Screen3 extends RX.Component<null, null> {
    private _navigator: RX.Navigator;

    componentDidMount() {
        
    }

    render() {
        return(
            <RX.View style={styles.tabStyle}>
                <RX.Text  style={styles.contentStyle}>
                Tab 1
                </RX.Text>
            </RX.View>
        )
    }



   

  
}

export = Screen3;
