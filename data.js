var APP_DATA = {
  "scenes": [
    {
      "id": "0-work-space--meeting-room",
      "name": "WORK SPACE / MEETING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "yaw": 0.02123478403576584,
        "pitch": 0.07401771060034967,
        "fov": 1.1432585806104338
      },
      "linkHotspots": [
        {
          "yaw": -3.1196774365535482,
          "pitch": 0.007739226884211803,
          "rotation": 6.283185307179586,
          "target": "1-dinning-room--lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dinning-room--lounge",
      "name": "DINNING ROOM / LOUNGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.07185319423657965,
          "pitch": 0.1517163942306503,
          "rotation": 0,
          "target": "2-roof-top-1"
        },
        {
          "yaw": 2.9663834256890915,
          "pitch": 0.009709047833844409,
          "rotation": 0,
          "target": "0-work-space--meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-roof-top-1",
      "name": "ROOF TOP #1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09519629921625494,
          "pitch": 0.09038448647195452,
          "rotation": 0,
          "target": "3-roof-top-2"
        },
        {
          "yaw": -2.8375247661850906,
          "pitch": 0.12163185421829326,
          "rotation": 0,
          "target": "1-dinning-room--lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-roof-top-2",
      "name": "ROOF TOP #2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1330166905814245,
          "pitch": 0.1183557953548835,
          "rotation": 0,
          "target": "2-roof-top-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Iservices Belgium",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
