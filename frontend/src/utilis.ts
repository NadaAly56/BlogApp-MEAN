import { DatePipe } from "@angular/common"


export function formatDates(datesArry:[]) {
  const datePipe = new DatePipe('en-US')
  datesArry.forEach((blog:any) => {
    blog.createdAt = datePipe.transform(blog.createdAt, 'medium');
  });
}

export function signed(){
  return localStorage.getItem('token')?true:false
}
