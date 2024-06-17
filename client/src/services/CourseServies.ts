import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/IUser";
import { CourseInfo } from "../models/CourseInfo";
import { anwser } from "../models/anwser";


export default class CourseService{
   static async submitAnswer(code: string,Prolanguage: string, correctAnswers: string):Promise<AxiosResponse<anwser>>{
       return $api.post<anwser>('/submit', {code,Prolanguage, correctAnswers})
   }
   static async getCourseInfo(courseTitle:string):Promise<AxiosResponse<CourseInfo>>{
        return $api.get(`/courses/${courseTitle}`);
   }
   static async getAllCourses():Promise<AxiosResponse<CourseInfo[]>>{
        return $api.get<CourseInfo[]>(`/courses`);
   }
   static async info():Promise<void>{
     return $api.get('/info');
   }
}