let sum=0;
let y;

var productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}
  
//looping object dalam data, "i" banyaknya object data (1,2,dst)
for (let i=0; i<3; i++ ){
    //array kosong dengan nama variable numbers
    let numbers = [];

    //Mengambil object spesifik
    numbers = productBin.data[i];

    //Convert object dalam array
    let arr = Object.entries(numbers);

    //Mengambil array quantity
    const arr_quantity = arr[6];

    //Mengambil nilai array quantity 
    const parse_value = arr_quantity[1];

    //Memasukkan nilai quantity dalam variable arr1
    let arr1 = parse_value;

    //Output
    console.log(arr1)

}


