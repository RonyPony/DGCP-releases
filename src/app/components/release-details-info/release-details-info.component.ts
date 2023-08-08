import { Component, Input } from '@angular/core';
import { Contract, Release, ReleaseInfo } from 'src/app/models/release';
import { ReleaseData } from 'src/app/models/releasesByYear';
import { ReleasesServicesService } from 'src/app/services/releases-services.service';

@Component({
  selector: 'app-release-details-info',
  templateUrl: './release-details-info.component.html',
  styleUrls: ['./release-details-info.component.css']
})
export class ReleaseDetailsInfoComponent {
  constructor(private releaseService:ReleasesServicesService){

  }
  @Input()
  ocid?:string;
  isLoading:boolean=true;
  release?:Release
  releaseData?:ReleaseInfo[]
  releaseContracts?:Contract[]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.getRelease();

  }


  getRelease(){
    this.releaseService.getReleaseById(this.ocid!).subscribe(response => {
      this.release = response;
      this.releaseData = this.release.releases
      this.releaseContracts = this.releaseData![0].contracts
      // console.log(this.releaseData!)
      this.isLoading=false;
      });
  }
}
