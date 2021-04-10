import moment from 'moment';

const getSchedule = (state) => {
    var temp = [];
    //Converting Date to String
    const Sdate = moment().format('D').toString()
    const Smonth = moment().format('M').toString()
    const Syear = moment().format('YYYY').toString()

    //Converting String to int
    const date = parseInt(Sdate);
    const month = parseInt(Smonth);
    const year = parseInt(Syear);




    for(var i=0; i<state.length; i++){
        //console.log(state[i])
        //console.log('=========')
        //converting ../\.. Date --> String --> Int
        const Year = parseInt(moment(state[i].Edate).format('YYYY').toString());
        const Month = parseInt(moment(state[i].Edate).format('M').toString())
        const Date = parseInt(moment(state[i].Edate).format('D').toString())
        //console.log(date+' '+Date+' '+month+' '+Month+' '+year+' '+Year)

        if(Year >= year){
            if(Month >= month){
                if(Date > date){
                    temp.push(state[i])
                }
            }
        }
    }
    //setScheduleList(temp)
    return temp;
}

export default getSchedule;

