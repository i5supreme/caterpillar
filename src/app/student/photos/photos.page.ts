import { AuthService } from './../../auth/auth.service';
import { PhotoModalPage } from "./photo-modal/photo-modal.page";
import { StudentService } from "./../student.service";
import { Student } from "./../student.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Observable } from 'rxjs';

@Component({
  selector: "app-photos",
  templateUrl: "./photos.page.html",
  styleUrls: ["./photos.page.scss"]
})
export class PhotosPage implements OnInit {
  students: Student[] = [];

  userPhoto$: Observable<string>;

  sliderConfig = {
    slidesPerView: 1.3,
    spaceBetween: 7,
    centeredSlides: false,
    slideShadows: true,
    watchSlidesProgress: true,
    initialSlide: 1,
    speed: 400
  }

  constructor(
    private activateRouter: ActivatedRoute,
    private studentService: StudentService,
    private modalCtrl: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(params => {
      if (params.has("studentId")) {
        this.studentService
          .getStudentById(params.get("studentId"))
          .subscribe(student => this.students.push(student));
      } else {
        this.studentService
          .getStudents()
          .subscribe(students => this.students = students);
      }
    });

    this.userPhoto$ = this.authService.getUserPhotoUrl();
  }

  onOpenGallery(image: string) {
    this.modalCtrl
      .create({
        component: PhotoModalPage,
        componentProps: {
          img: image
        }
      })
      .then(modal => {
        modal.present();
      });
  }
}
