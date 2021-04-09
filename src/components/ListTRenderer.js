import React from 'react';
import {FlatList, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const ListTRenderer = ({ListData, wWidth, nav, delf}) => {

    //console.log(ListData);
    
    return (
        //<ScrollView style={{flex: 1}}>
        <FlatList 
            data={ListData}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
            return <ScrollView 
                horizontal={true} 
                style={{flexDirection: 'row', marginVertical: 10, elevation: 5, position: 'relative'}}
                showsHorizontalScrollIndicator={false}
            >
            
            <View style={{width: (wWidth-40), borderRadius: 8, height: 80, paddingVertical: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                
                {
                    //Working on this icon to show status of project
                }
                
                {
                    //console.log(item)
                    (item.status === 'created') ? 
                    (<Icon 
                        name='circle'
                        size={25}
                        style={{color: '#f85f6a', marginHorizontal: 20}}
                    />) :
                    (
                        (item.status === 'pending') ?
                        (<Icon 
                            name='alert-circle'
                            size={25}
                            style={{color: '#f85f6a', marginHorizontal: 20}}
                        />) :
                        
                        (<Icon 
                            name='check-circle'
                            size={25}
                            style={{color: '#f85f6a', marginHorizontal: 20}}
                        />) 
                    )
                }
                <View>
                    <Text style={{fontSize: 20, fontWeight: '600',}}>{item.title}</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', fontStyle: 'italic', color: 'grey'}}>{item.date}</Text>        
                </View>
            </View>
        
            <TouchableOpacity onPress={()=>nav.navigate('Edit', {id: item.id})}>
                <Icon 
                    name='edit'
                    size={25}
                    style={{alignSelf: 'center', textAlign: 'right', width: 50, color: '#f85f6a', paddingVertical: 25}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{delf(item.id);}}>
                <Icon 
                    name='delete'
                    size={25}
                    style={{alignSelf: 'center', textAlign: 'right', width: 50, color: '#f85f6a', paddingVertical: 25}}
                />
            </TouchableOpacity>
            </ScrollView>;
            }}
        />
        //</ScrollView>
        );
}

export default ListTRenderer;