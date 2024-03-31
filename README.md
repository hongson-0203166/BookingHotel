Hotel
  Add hotel
  url:localhost:8000/hotel/addHotel/
  param:{
    "site":"Thành phố Hồ Chí Minh",
    "hotel_name":"Silverland Mây Hotel",
    "type": "3 sao",
    "urlHotel": 
    [
            "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20068926-a10814c4e4844458330ae3733a0fe846.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-360,q-40,w-640",
            "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20068926-ff1bbe962d25a43a23897f42cc99b4db.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-360,q-40,w-640",
            "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20068926-8f596704fd15654463e26e2adfbc569f.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-360,q-40,w-640"
    ]
  }


  Pull All hotel with site 
  http://localhost:8000/hotel/getAllHotelSite/H%C3%A0%20N%E1%BB%99i






Room
  Add Room 
  localhost:8000/hotel/addRoom/

  param :
  
{
    "roomNumber": 8,
    "roomType":"Vip",
    "state": "Open",
    "price": 500000,
    "urlRoom": [
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67778274-665e661aa4dc3b70be8ff81d66f71171.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-360,q-40,w-640",
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67778274-d22561c06b9bcec727af7a5fb1378627.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-360,q-40,w-640",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/7e/82/20/executive-suite.jpg?w=1400&h=-1&s=1",
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67778274-8b6b7528cc4b85bcd30449f9822b41d1.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-360,q-40,w-640",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/7d/e0/2a/s-nh-khach-s-n.jpg?w=1400&h=-1&s=1"
    ],
    "hotel": "66084296254e89a1f5b261d2"
}






Customer
add customer
  http://localhost:8000/hotel/addCustomer/
  {
    "name": "Vũ Hải Tuấn",
    "email": "haituan@gmail.com",
    "phoneNumber": "0123221348"
}



get customer with name
http://localhost:8000/hotel/getAllCustomerwithName/s%C6%A1n





Booking
  add Booking 
  localhost:8000/hotel/booking/
  {
                "customer": "6608d5344c20296168e9433b",
                "room": "660843b7254e89a1f5b261d4",
                "hotel": "66083a82254e89a1f5b261be", 
                "checkInDate": "2024-04-01",
                "checkOutDate": "2024-04-03"
}
