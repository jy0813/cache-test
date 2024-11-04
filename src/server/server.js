import express from "express";
import cors from "cors";

const app = express();
const port = 9090;

app.use(cors());
app.use(express.json());

app.get('/api/kr/menu', (req, res) => {
  const currentTime = new Date().toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3, 
    hour12: false,
  });

  console.log(`Received KR menu request at ${currentTime}`);

  const menu = {
    "categories": [
      {
        "id": 1,
        "name": "카테고리 0",
        "products": [
          {
            "code": "01JBDZDT2G1NN1BXZJGN933B57",
            "name": "상품 416"
          },
          {
            "code": "01JBDZDT2G1NN1BXZJGN933B58",
            "name": "상품 044"
          },
          {
            "code": "01JBDZDT2H9M8BVWWZ4P69D80R",
            "name": "상품 222"
          },
          {
            "code": "01JBDZDT2JK9FMSXDD2D1BRKB7",
            "name": "상품 092"
          },
          {
            "code": "01JBDZDT2KWS6WYKA8HGZXCTWZ",
            "name": "상품 741"
          },
          {
            "code": "01JBDZDT2WWHS9M4XRS1FVEWN8",
            "name": "상품 757"
          },
          {
            "code": "01JBDZDT2XBG61KSE8CHVV90ZV",
            "name": "상품 229"
          }
        ]
      },
      {
        "id": 2,
        "name": "카테고리 1",
        "products": [
          {
            "code": "01JBDZDT32BPRNTD7756HF1VBX",
            "name": "상품 854"
          },
          {
            "code": "01JBDZDT32BPRNTD7756HF1VBY",
            "name": "상품 022"
          },
          {
            "code": "01JBDZDT32BPRNTD7756HF1VBZ",
            "name": "상품 148"
          },
          {
            "code": "01JBDZDT33PGEFMJA8GZTG3SVJ",
            "name": "상품 008"
          },
          {
            "code": "01JBDZDT33PGEFMJA8GZTG3SVK",
            "name": "상품 371"
          },
          {
            "code": "01JBDZDT3BXS6N7X3NGG0QRM3S",
            "name": "상품 336"
          },
          {
            "code": "01JBDZDT3CQY5GK3EVVB22B8GQ",
            "name": "상품 742"
          }
        ]
      },
      {
        "id": 3,
        "name": "카테고리 2",
        "products": [
          {
            "code": "01JBDZDT3HSAKDYS6WGZHWAA4P",
            "name": "상품 515"
          },
          {
            "code": "01JBDZDT3HSAKDYS6WGZHWAA4Q",
            "name": "상품 326"
          },
          {
            "code": "01JBDZDT3HSAKDYS6WGZHWAA4R",
            "name": "상품 552"
          },
          {
            "code": "01JBDZDT3K80BVF7Z80YGSTY0K",
            "name": "상품 901"
          },
          {
            "code": "01JBDZDT3K80BVF7Z80YGSTY0M",
            "name": "상품 682"
          },
          {
            "code": "01JBDZDT3V8CKY3A3Q9ZQSVEH8",
            "name": "상품 151"
          },
          {
            "code": "01JBDZDT3WQAPSWN61CWGS4KN3",
            "name": "상품 300"
          }
        ]
      },
      {
        "id": 4,
        "name": "카테고리 3",
        "products": [
          {
            "code": "01JBDZDT41F6F1VQNXWACDB73Y",
            "name": "상품 107"
          },
          {
            "code": "01JBDZDT41F6F1VQNXWACDB73Z",
            "name": "상품 794"
          },
          {
            "code": "01JBDZDT41F6F1VQNXWACDB740",
            "name": "상품 859"
          },
          {
            "code": "01JBDZDT42ES3F90Y6C841Z8ZY",
            "name": "상품 349"
          },
          {
            "code": "01JBDZDT42ES3F90Y6C841Z8ZZ",
            "name": "상품 244"
          },
          {
            "code": "01JBDZDT4ANYRJ8Q7ZMB63MFYP",
            "name": "상품 711"
          },
          {
            "code": "01JBDZDT4BC9W3FVAH9X23CH3E",
            "name": "상품 188"
          }
        ]
      },
      {
        "id": 5,
        "name": "카테고리 4",
        "products": [
          {
            "code": "01JBDZDT4G206BBKQMVK7W3QGG",
            "name": "상품 827"
          },
          {
            "code": "01JBDZDT4G206BBKQMVK7W3QGH",
            "name": "상품 263"
          },
          {
            "code": "01JBDZDT4G206BBKQMVK7W3QGJ",
            "name": "상품 809"
          },
          {
            "code": "01JBDZDT4H1V4VZ76S0QXZS9V3",
            "name": "상품 533"
          },
          {
            "code": "01JBDZDT4H1V4VZ76S0QXZS9V4",
            "name": "상품 504"
          },
          {
            "code": "01JBDZDT4S26KTQ8CJZY2EGAWF",
            "name": "상품 517"
          },
          {
            "code": "01JBDZDT4TX2QVCE8DPZTAVT3P",
            "name": "상품 772"
          }
        ]
      }
    ]
  };
  res.json(menu);
})


app.get("/api/kr/top-banners", (req, res) => {
  

  const currentTime = new Date().toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3, 
    hour12: false,
  });

  console.log(`Received KR banners request at ${currentTime}`);
  

  const banners = {
    "top_banners": [
      {
        "id": 1,
        "image": "https://picsum.photos/200/300",
        "text": "이것은 배너0입니다.",
        "link": null,
        "created_at": "2024-10-30T05:47:24.000000Z",
        "updated_at": "2024-10-30T05:47:24.000000Z"
      },
      {
        "id": 2,
        "image": "https://picsum.photos/200/300",
        "text": "이것은 배너1입니다.",
        "link": "/",
        "created_at": "2024-10-30T05:47:24.000000Z",
        "updated_at": "2024-10-30T05:47:24.000000Z"
      },
      {
        "id": 3,
        "image": "https://picsum.photos/200/300",
        "text": "이것은 배너2입니다.",
        "link": "https://www.google.com",
        "created_at": "2024-10-30T05:47:24.000000Z",
        "updated_at": "2024-10-30T05:47:24.000000Z"
      }
    ]
  }
  

  res.json(banners);
});

app.get('/api/us/menu', (req, res) => {
  const currentTime = new Date().toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3, 
    hour12: false,
  });

  console.log(`Received US menu request at ${currentTime}`);

  const menu = {
    "categories": [
      {
        "id": 1,
        "name": "카테고리 0",
        "products": [
          {
            "code": "01JBDZDT2G1NN1BXZJGN933B57",
            "name": "상품 416"
          },
          {
            "code": "01JBDZDT2G1NN1BXZJGN933B58",
            "name": "상품 044"
          },
          {
            "code": "01JBDZDT2H9M8BVWWZ4P69D80R",
            "name": "상품 222"
          },
          {
            "code": "01JBDZDT2JK9FMSXDD2D1BRKB7",
            "name": "상품 092"
          },
          {
            "code": "01JBDZDT2KWS6WYKA8HGZXCTWZ",
            "name": "상품 741"
          },
          {
            "code": "01JBDZDT2WWHS9M4XRS1FVEWN8",
            "name": "상품 757"
          },
          {
            "code": "01JBDZDT2XBG61KSE8CHVV90ZV",
            "name": "상품 229"
          }
        ]
      },
      {
        "id": 2,
        "name": "카테고리 1",
        "products": [
          {
            "code": "01JBDZDT32BPRNTD7756HF1VBX",
            "name": "상품 854"
          },
          {
            "code": "01JBDZDT32BPRNTD7756HF1VBY",
            "name": "상품 022"
          },
          {
            "code": "01JBDZDT32BPRNTD7756HF1VBZ",
            "name": "상품 148"
          },
          {
            "code": "01JBDZDT33PGEFMJA8GZTG3SVJ",
            "name": "상품 008"
          },
          {
            "code": "01JBDZDT33PGEFMJA8GZTG3SVK",
            "name": "상품 371"
          },
          {
            "code": "01JBDZDT3BXS6N7X3NGG0QRM3S",
            "name": "상품 336"
          },
          {
            "code": "01JBDZDT3CQY5GK3EVVB22B8GQ",
            "name": "상품 742"
          }
        ]
      },
      {
        "id": 3,
        "name": "카테고리 2",
        "products": [
          {
            "code": "01JBDZDT3HSAKDYS6WGZHWAA4P",
            "name": "상품 515"
          },
          {
            "code": "01JBDZDT3HSAKDYS6WGZHWAA4Q",
            "name": "상품 326"
          },
          {
            "code": "01JBDZDT3HSAKDYS6WGZHWAA4R",
            "name": "상품 552"
          },
          {
            "code": "01JBDZDT3K80BVF7Z80YGSTY0K",
            "name": "상품 901"
          },
          {
            "code": "01JBDZDT3K80BVF7Z80YGSTY0M",
            "name": "상품 682"
          },
          {
            "code": "01JBDZDT3V8CKY3A3Q9ZQSVEH8",
            "name": "상품 151"
          },
          {
            "code": "01JBDZDT3WQAPSWN61CWGS4KN3",
            "name": "상품 300"
          }
        ]
      },
      {
        "id": 4,
        "name": "카테고리 3",
        "products": [
          {
            "code": "01JBDZDT41F6F1VQNXWACDB73Y",
            "name": "상품 107"
          },
          {
            "code": "01JBDZDT41F6F1VQNXWACDB73Z",
            "name": "상품 794"
          },
          {
            "code": "01JBDZDT41F6F1VQNXWACDB740",
            "name": "상품 859"
          },
          {
            "code": "01JBDZDT42ES3F90Y6C841Z8ZY",
            "name": "상품 349"
          },
          {
            "code": "01JBDZDT42ES3F90Y6C841Z8ZZ",
            "name": "상품 244"
          },
          {
            "code": "01JBDZDT4ANYRJ8Q7ZMB63MFYP",
            "name": "상품 711"
          },
          {
            "code": "01JBDZDT4BC9W3FVAH9X23CH3E",
            "name": "상품 188"
          }
        ]
      },
      {
        "id": 5,
        "name": "카테고리 4",
        "products": [
          {
            "code": "01JBDZDT4G206BBKQMVK7W3QGG",
            "name": "상품 827"
          },
          {
            "code": "01JBDZDT4G206BBKQMVK7W3QGH",
            "name": "상품 263"
          },
          {
            "code": "01JBDZDT4G206BBKQMVK7W3QGJ",
            "name": "상품 809"
          },
          {
            "code": "01JBDZDT4H1V4VZ76S0QXZS9V3",
            "name": "상품 533"
          },
          {
            "code": "01JBDZDT4H1V4VZ76S0QXZS9V4",
            "name": "상품 504"
          },
          {
            "code": "01JBDZDT4S26KTQ8CJZY2EGAWF",
            "name": "상품 517"
          },
          {
            "code": "01JBDZDT4TX2QVCE8DPZTAVT3P",
            "name": "상품 772"
          }
        ]
      }
    ]
  };
  res.json(menu);
})


app.get("/api/us/top-banners", (req, res) => {
  

  const currentTime = new Date().toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3, 
    hour12: false,
  });

  console.log(`Received US banners request at ${currentTime}`);
  

  const banners = {
    "top_banners": [
      {
        "id": 1,
        "image": "https://picsum.photos/200/300",
        "text": "이것은 배너0입니다.",
        "link": null,
        "created_at": "2024-10-30T05:47:24.000000Z",
        "updated_at": "2024-10-30T05:47:24.000000Z"
      },
      {
        "id": 2,
        "image": "https://picsum.photos/200/300",
        "text": "이것은 배너1입니다.",
        "link": "/",
        "created_at": "2024-10-30T05:47:24.000000Z",
        "updated_at": "2024-10-30T05:47:24.000000Z"
      },
      {
        "id": 3,
        "image": "https://picsum.photos/200/300",
        "text": "이것은 배너2입니다.",
        "link": "https://www.google.com",
        "created_at": "2024-10-30T05:47:24.000000Z",
        "updated_at": "2024-10-30T05:47:24.000000Z"
      }
    ]
  }
  

  res.json(banners);
});


app.listen(port, () => console.log(`Server is running on port ${port}`));
