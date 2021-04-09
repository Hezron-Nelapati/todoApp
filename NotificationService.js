import PushNotification from 'react-native-push-notification';
import moment from 'moment';
//export default NotificationService = () => {
	
	//onNotificaitn is a function passed in that is to be called when a
	//notification is to be emitted.
//   constructor(onNotification) {
//     this.configure(onNotification);
//     this.lastId = 0;
//   }

   const configure = () => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification)},

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      requestPermissions: true,
      popInitialNotification: true,
    });
  }

	//Appears right away 
   const localNotification = ()=>{
    //this.lastId++;
    configure();
    PushNotification.localNotification({
      channelId: "83",
      title: "Local Notification", 
      message: "My Notification Message", 
      // playSound: true, 
      // soundName: 'default', 
      actions: '["Yes", "No"]'
    });
  }

	//Appears after a specified time. App does not have to be open.
   const scheduleNotification = (date, time, title)=>{
    //this.lastId++;
    configure();
    var alert = moment(date).format("LL").toString()
    alert+=" ";
    alert+=moment(time).format("LT").toString()
    //console.log('Alert '+alert)
    PushNotification.localNotificationSchedule({
      date: new Date(alert), //30 seconds
      channelId: "84",
      title: title, 
      message: "My Notification Message",
      playSound: true, 
      soundName: 'default', 
    });
  }

   const checkPermission = (cbk)=>{
    return PushNotification.checkPermissions(cbk);
  }

    const cancelNotif = ()=> {
    PushNotification.cancelLocalNotifications({id: ''+this.lastId});
  }

    const cancelAll = ()=> {
    PushNotification.cancelAllLocalNotifications();
  }

  export {configure, localNotification, scheduleNotification, checkPermission, cancelNotif, cancelAll}
//}