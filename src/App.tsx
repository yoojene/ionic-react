import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';
import { Geolocation } from '@ionic-native/geolocation';



class App extends Component {

  public lat: React.ReactNode;
  public long: React.ReactNode;
  constructor(
    props: Readonly<{}> 
    ) {

    super(props);

    // this.state = {lat: 0, long: 0}

  
    let watch = Geolocation.watchPosition();
    watch.subscribe((data) => {

      console.log(data);
      // data can be a set of coordinates, or an error (if an error occurred).
      console.log(`lat is ${data.coords.latitude}`);
      console.log(`long is ${data.coords.longitude}`)    

      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
      
      // this.setState({ lat: data.coords.latitude, long: data.coords.longitude })
    });

  }

  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
          </IonCard>


          <IonCard>
            <IonCardHeader> Geo Location </IonCardHeader>
            <IonCardContent>
              <div>Latitude is {this.lat}</div>
                <div>Longitude is {this.long}</div>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;