//export class ProductService{

   //     getProducts(): string[] {
   //         return ["Learning React", "Learning Angular", "ASP.NET" ];
   //     }

   export class RoomService{
    getRooms() {
    return [
    {
    imageUrl: "http://loremflickr.com/150/150?random=1",
    roomName: "Room 1",
    releasedDate: "May 31, 2016",
    description: "Cras sit amet nibh libero, in gravida... ",
    temperature: 20,
    humidity: 50
    },
    {
    imageUrl: "http://loremflickr.com/150/150?random=2",
    roomName: "Room 2",
    releasedDate: "October 31, 2016",
    description: "Cras sit amet nibh libero, in gravida... ",
    temperature: 21,
    humidity: 55
    },
    {
    imageUrl: "http://loremflickr.com/150/150?random=3",
    roomName: "Room 3",
    releasedDate: "July 30, 2016",
    description: "Cras sit amet nibh libero, in gravida... ",
    temperature:22,
    humidity: 53
    }];
    }
   }

