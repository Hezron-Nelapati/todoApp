import React from 'react';
import {FlatList, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ListRenderer = ({ListData, wWidth, nav, delf}) => {

    return (<FlatList 
            data={ListData}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
            return <ScrollView 
                horizontal={true} 
                style={{flexDirection: 'row', marginVertical: 5, elevation: 5, position: 'relative'}}
                showsHorizontalScrollIndicator={false}
            >
            <View style={{width: (wWidth-40), borderRadius: 8, paddingLeft: 1, height: 55, paddingVertical: 12, backgroundColor: 'white', flexDirection: 'row'}}>
            {
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
                <Text style={{fontSize: 20, fontWeight: '600',}}>{item.title}</Text>
            </View>
            <TouchableOpacity onPress={()=>nav.navigate('Edit', {id: item.id})}>
                <Icon 
                    name='edit'
                    size={25}
                    style={{alignSelf: 'center', textAlign: 'right', width: 50, color: '#f85f6a', paddingVertical: 12}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{delf(item.id);}}>
                <Icon 
                    name='delete'
                    size={25}
                    style={{alignSelf: 'center', textAlign: 'right', width: 50, color: '#f85f6a', paddingVertical: 12}}
                />
            </TouchableOpacity>
            </ScrollView>;
            }}
        />)
}

export default ListRenderer;