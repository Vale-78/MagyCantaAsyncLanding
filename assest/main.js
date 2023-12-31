const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UChUREDTxIhF5mOpLFCPRUNw&part=snippet%2Cid&order=date&maxResults=50';
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '434f05a3b6mshd9d1312b2e62237p1ee1abjsnd9fc7dea9bcf',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () =>{
try {
  const videos = await fetchData(API);
  let view = `
  ${videos.items.map(video => `
  <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h4>
          </div>
        </div>
  `).slice(0,12).join('')}
  
  `;
  content.innerHTML = view
} catch (error) {
    console.log(error);
    alert('Error al conectar con el servidor')
}
})();

// Json -info recibida
// {
//     "kind": "youtube#searchListResponse",
//     "regionCode": "FR",
//     "pageInfo": {
//       "totalResults": 13,
//       "resultsPerPage": 13
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "qwMllyDeKLc"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-24T20:29:37Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- Certamen Carlos Paz Devolución Jurado.",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/qwMllyDeKLc/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/qwMllyDeKLc/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/qwMllyDeKLc/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-24T20:29:37Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "wahPwxp1Ldw"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-24T20:17:16Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- María María- Devolución Jurado3- Cba",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/wahPwxp1Ldw/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/wahPwxp1Ldw/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/wahPwxp1Ldw/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-24T20:17:16Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "UsXnWMbARjk"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-24T19:57:10Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- María María- Devolución Jurado2-Cba",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/UsXnWMbARjk/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/UsXnWMbARjk/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/UsXnWMbARjk/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-24T19:57:10Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "nBMj6OpGXR0"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-24T19:37:03Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- María María- Devolución Jurado1- Cba",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/nBMj6OpGXR0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/nBMj6OpGXR0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/nBMj6OpGXR0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-24T19:37:03Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "oBqKy5EXzVE"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-24T19:09:30Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- Oye Chico - Decisión de Jurado.",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/oBqKy5EXzVE/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/oBqKy5EXzVE/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/oBqKy5EXzVE/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-24T19:09:30Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "PPSjy7KfAWs"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-24T18:59:25Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- Compilado de presentaciones 1",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/PPSjy7KfAWs/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/PPSjy7KfAWs/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/PPSjy7KfAWs/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-24T18:59:25Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "V_jm_MaM0cc"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-19T17:29:43Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez-  Compilado de presentaciones.",
//           "description": "Este es un resumen de varios temas interpretados por Magy Nuñez en diferentes eventos.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/V_jm_MaM0cc/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/V_jm_MaM0cc/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/V_jm_MaM0cc/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-19T17:29:43Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "BxXLOXX9PNM"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-19T17:00:28Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez - Mía",
//           "description": "Magy Nuñez interpreta la canción \"Mía\", compuesta por Cami. La letra trata sobre liberación personal y relata crudamente parte ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/BxXLOXX9PNM/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/BxXLOXX9PNM/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/BxXLOXX9PNM/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-19T17:00:28Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "ZwZUgPIsNHI"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-19T16:34:31Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez - Fallin&#39;",
//           "description": "Magy Nuñez interpreta Fallin' de Alicia Keys. Esta gran canción de blues: 'Fallin' no puede ser una canción más blues desde su ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/ZwZUgPIsNHI/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/ZwZUgPIsNHI/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/ZwZUgPIsNHI/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-19T16:34:31Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "EP49SXXjTS0"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-19T16:03:34Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- Creep (Versión vintage)",
//           "description": "Magy Nuñez interpreta un cover de Creep de Radiohead en versión vintage. Este video es un regalo de los papás de Magy a sus ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/EP49SXXjTS0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/EP49SXXjTS0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/EP49SXXjTS0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-19T16:03:34Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "vi9v08v8T_4"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-19T15:22:19Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- Buenos Aires",
//           "description": "Magy Nuñez interpreta \"Buenos Aires\" de Nathy Peluso. La canción habla de la soledad, de domingos perdidos, de días de lluvia ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/vi9v08v8T_4/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/vi9v08v8T_4/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/vi9v08v8T_4/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-19T15:22:19Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "sV2n-9x9q40"
//         },
//         "snippet": {
//           "publishedAt": "2023-10-19T14:36:59Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magy Nuñez- La despedida",
//           "description": "Interpretación de La despedida- Cami. Esta canción habla sobre despedirse de una persona de una forma muy dolorosa, según ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/sV2n-9x9q40/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/sV2n-9x9q40/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/sV2n-9x9q40/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-10-19T14:36:59Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "id": {
//           "kind": "youtube#channel",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw"
//         },
//         "snippet": {
//           "publishedAt": "2022-01-23T19:50:29Z",
//           "channelId": "UChUREDTxIhF5mOpLFCPRUNw",
//           "title": "Magali Nuñez",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://yt3.ggpht.com/ZV0dcjVsheeCR45VfVd8-33AD7VMPcvJ99klOxBUyF3RFdx8kqllV6J0LBQJvYIIG1h534Tnwg=s88-c-k-c0xffffffff-no-rj-mo"
//             },
//             "medium": {
//               "url": "https://yt3.ggpht.com/ZV0dcjVsheeCR45VfVd8-33AD7VMPcvJ99klOxBUyF3RFdx8kqllV6J0LBQJvYIIG1h534Tnwg=s240-c-k-c0xffffffff-no-rj-mo"
//             },
//             "high": {
//               "url": "https://yt3.ggpht.com/ZV0dcjVsheeCR45VfVd8-33AD7VMPcvJ99klOxBUyF3RFdx8kqllV6J0LBQJvYIIG1h534Tnwg=s800-c-k-c0xffffffff-no-rj-mo"
//             }
//           },
//           "channelTitle": "Magali Nuñez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-01-23T19:50:29Z"
//         }
//       }
//     ]
//   }