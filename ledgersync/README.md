# Ledger Sync
##### Sync Sawtooth Ledger enties to MongoDB via mongoose plugin

#### Sample Data
`
{
  "_id": "5b80d23a29f3c88393501845",
  "address": "bf0f0b303f0aa215a51844c4eb45681aae3aa6bd76ead8a706087f3d8c93a5cdc009bd",
  "id": "P2",
  "timestamp": "2018-08-23T12:48:24.000Z",
  "value": {
    "id": "P2",
    "data": {
      "name": "John Doe",
      "phone": "121231232"
    },
    "type": "doctor",
    "timestamp": "Thu, 23 Aug 2018 12:48:24 GMT"
  },
  "blockNum": 1,
  "blockId": "a9806946f741d160484ccfe1d0bc5be35676b36d9d68f028baf167607ac4f22b34415bc299cd8bda4fbf738bf0967260786d4e4546a5045b132425b4b9b908da",
  "stateRootHash": "9421a560aa2a459734b4ed6e9cc035053b4fdbd55b702312d8e1ec1382ec9933",
  "batches": [{
    "_id": "5b80d23a29f3c88393501841",
    "header": {
      "transaction_ids": ["6e1184e315714b15bc4d89a4b6c5088d68a7b1d74085e7cd876c97b48bc852c546a1cc7973227c9b7fb9afd8e2e73a333a5e17ac59639f00e75607e6356a6cbf"],
      "_id": "5b80d23a29f3c88393501842",
      "signer_public_key": "028079ffea563ac1b0ed02aad21103e46153ab0aff27627b8093892d31fe0ab829"
    },
    "header_signature": "bbfa48dee9add7fa7cc79a2417469e5c82331a9cbe5fe2ecbdd782352e538d423840bf01505ee0e912065d72d7fa5dd70f0e9fa9d052a198ab7b26db7e8ba0d7",
    "trace": false,
    "transactions": [{
      "_id": "5b80d23a29f3c88393501843",
      "header": {
        "dependencies": [],
        "inputs": ["bf0f0b"],
        "outputs": ["bf0f0b"],
        "_id": "5b80d23a29f3c88393501844",
        "batcher_public_key": "028079ffea563ac1b0ed02aad21103e46153ab0aff27627b8093892d31fe0ab829",
        "family_name": "openemr",
        "family_version": "2.4",
        "nonce": "0.7047753904303051",
        "payload_sha512": "cb7f764206e0679dfcce820acec4ca7c187fe94bfade346696fcae05464303182a9c141de8561bebb88a527d58884b927e85991680cae86b9be84764db8a8ea9",
        "signer_public_key": "028079ffea563ac1b0ed02aad21103e46153ab0aff27627b8093892d31fe0ab829"
      },
      "header_signature": "6e1184e315714b15bc4d89a4b6c5088d68a7b1d74085e7cd876c97b48bc852c546a1cc7973227c9b7fb9afd8e2e73a333a5e17ac59639f00e75607e6356a6cbf",
      "payload": {
        "Action": "userRegister",
        "Data": {
          "id": "P2",
          "data": {
            "name": "John Doe",
            "phone": "121231232"
          },
          "type": "doctor",
          "timestamp": "Thu, 23 Aug 2018 12:48:24 GMT"
        },
        "timestamp": "Thu, 23 Aug 2018 12:48:24 GMT"
      }
    }]
  }],
  "addressType": "user",
  "entryId": "bf0f0b303f0aa215a51844c4eb45681aae3aa6bd76ead8a706087f3d8c93a5cdc009bd1",
  "__v": 0
}
`

1. Run `npm start` to start ledger sync application
2. Build the `Dockerfile` and attache to `docker-compose.yaml` file


##### Config

1. Configuration relcated to database and validator and namespace mapping can be found inside system direcotry `config.js` and `config.json`