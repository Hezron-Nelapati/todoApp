import React from 'react';
import {View, Text, FlatList} from 'react-native';

const Statistic = ({values}) => {
    const Week = [
        {day: 'Sun'},
        {day: 'Mon'},
        {day: 'Tue'},
        {day: 'Thu'},
        {day: 'Fri'},
        {day: 'Sat'}
    ]

    
    //console.log(values);
    const len = values.length;
    //console.log('len '+len)
    //assume least value is 100
    // const min = function(values, len){
    //     let minimum = 0;
    //     for(let i in values){
    //         console.log('val '+i.val)
    //         // if(values[i].val<100){
    //         //     minimum = values[i].val;
    //         // }
    //     }
    //     console.log('min '+minimum)
    //     return minimum;
    // }
    // console.log(min())
    // const values = [
    //     {val: 6},
    //     {val: 12},
    //     {val: 15},
    //     {val: 1}, //here the val is original val divided by max height
    //     {val: 20},
    //     {val: 17}
    // ]
    var min = 0;
    values.forEach(element => {
        //console.log(element);
        if(element.val < 100 && element.val < min){
            min = element.val
        }
    });
    //console.log('min '+min)

    var max = 0;
    values.forEach(element => {
        //console.log(element);
        if(element.val > 0 && element.val > max){
            max = element.val
        }
    });
    //console.log('max '+max)

    const refVal = [
        {val: max},
        {val: max*0.75},
        {val: max*0.50},  //here the refVal are numbers obtained by dividing max val into 4parts
        {val: max*0.25},
    ]

    const heit = parseInt(120/max);

    return (
        <View>
            <View style={{flexDirection: 'row'}}>

                <View style={{borderRightWidth: 1, alignSelf: 'flex-start', height: 120, width: 45}}>
                    <FlatList 
                            data={refVal}
                            horizontal={false}
                            renderItem={({item}) => {
                                return <Text style={{color: '#f85f6a', fontSize: 16, marginBottom: 6, paddingRight: 5, textAlign: 'right'}}>{item.val}</Text>
                            }}
                    />
                </View>
                <View style={{}}>
                    <FlatList 
                            data={values}
                            horizontal
                            renderItem={({item}) => {
                                return <View style={{height: 120, backgroundColor: '#f85f6a', width: 10, marginHorizontal: 20  }}> 
                                            <View style={{ height: 120-(heit ? heit*item.val: 0), width: 10, backgroundColor: 'rgb(248,248,248)' }}> 
                                            </View>
                                    </View>;
                            }}
                    />
                </View>
            </View>
            <View style={{borderTopWidth: 1,marginLeft: 35}}>
                <FlatList 
                        data={Week}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => {
                            return <Text style={{color: '#f85f6a',fontSize: 16, marginHorizontal: 12}}>{item.day}</Text>
                        }}
                />
            </View>
        </View>
    );
}

export default Statistic;