import {Component, OnInit} from '@angular/core';
import {INC2_POINT, INC_POINT, POINTS} from "../../../data/mark";
import {Subject} from "rxjs";

declare const ymaps3: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'angular-yandex-maps';
  map: any
  YMapControlButton1: any;
  destroy$ = new Subject<void>()
  ngOnInit(): void {
    ymaps3.ready;
    this.mapLoad()
  }


  async mapLoad() {
    const {YMap, YMapDefaultSchemeLayer, YMapControlButton, YMapControls, YMapDefaultFeaturesLayer} = ymaps3;
    const {YMapZoomControl, YMapGeolocationControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    this.YMapControlButton1 = YMapControlButton;

    this.map = new YMap(
      document.getElementById('map'),

      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [37.588144, 55.733842],

          // Уровень масштабирования
          zoom: 10
        }
      }
    );

    this.map.addChild(new YMapDefaultSchemeLayer())
    this.map.addChild(new YMapDefaultFeaturesLayer());

    this.map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
    this.map.addChild(new YMapControls({position: 'left'}).addChild(new YMapGeolocationControl({})));

    //контролы
    let counter = 0;
    const counterButton = new YMapControlButton({
      text: 'Counter #0',
      onClick: () => counterButton.update({text: 'Counter #' + ++counter})
    });
    const controls2 = new YMapControls({position: 'top left'}).addChild(counterButton);
    this.map.addChild(controls2);

    counterButton.update({text: 'Counter #' + ++counter});

    //маркеры
    POINTS.forEach((point) => {

        this.map.addChild(new YMapDefaultMarker(point));

    });

    const marker = new YMapDefaultMarker(INC_POINT);
    this.map.addChild(marker);

    const marker2 = new YMapDefaultMarker(INC2_POINT);
    this.map.addChild(marker2);
    let inc = 0;
    const updateTitle = () => {
      inc++;
      marker.update({
        title: 'Marker inc #' + inc
      });
    };

    updateTitle();
    setInterval(updateTitle, 1000);
  }
  show() {
    console.log(ymaps3)
    console.log(ymaps3.YMap.controls)
    console.log( this.YMapControlButton1)
  }
  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()

  }
}
