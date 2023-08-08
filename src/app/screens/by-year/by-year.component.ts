import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, Party, Release } from 'src/app/models/release';
import { ReleasesByYear } from 'src/app/models/releasesByYear';
import { ReleasesServicesService } from 'src/app/services/releases-services.service';

@Component({
  selector: 'app-by-year',
  templateUrl: './by-year.component.html',
  styleUrls: ['./by-year.component.css']
})
export class ByYearComponent {
  constructor(private releaseService:ReleasesServicesService) {

  }
  release:ReleasesByYear={
    creationDate:'',
    version:''
  }
  parties:Party[]=[]
  paramOcid?:string

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.loadInfo();

  }


  getAddress(ad:Address){
    var s=", "
    var str = ad.streetAddress??+s+ad.locality!??+s+ad.region!??+s+ad.countryName!
    // console.log(str)
    return str
  }


  loadInfo() {
      this.releaseService.getReleasesByYear('2023','1','10').subscribe(response => {
        this.release = response;
        this.release.data?.forEach(element => {
         this.releaseService.getReleaseById(element.ocid).subscribe(response =>{
          response.releases.forEach(x=>{
            x.parties.forEach(y=>{
              y.ocid=element.ocid
              this.parties.push(y)
            })
          })
          })
        })
      });
  }

}
