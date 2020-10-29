//export class ProductService{

   //     getProducts(): string[] {
   //         return ["Learning React", "Learning Angular", "ASP.NET" ];
   //     }

   export class ProductService{
    getProducts() {
    return [
    {
    imageUrl: "http://loremflickr.com/150/150/professor?random=1", 
    //imageUrl: "/Room_Images/IMG_20201026_120629.jpg",
    //imageUrl: "https://picsum.photos/200", 
    
    
    productName: "Room 1",
    releasedDate: "May 31, 2016",
    description: "Silent room overlooking the park,tables disposed projectworkwise... ",
    rating: 23,
    numOfReviews: 50
    },
    {
    imageUrl: "http://loremflickr.com/150/150/teacher?random=2",
    productName: "Room 2",
    releasedDate: "October 31, 2016",
    description: "Noisy, tables disposed clasically... ",
    rating: 20,
    numOfReviews: 45
    },
    {
    imageUrl: "http://loremflickr.com/150/150/teacher?random=3",
    productName: "Room 3",
    releasedDate: "July 30, 2016",
    description: "Quite OK, but disposed northwise,so needs more light... ",
    rating: 18,
    numOfReviews: 38
    }];
    }
   }


