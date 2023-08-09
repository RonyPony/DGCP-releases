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
  releaseData?:ReleaseInfo[]
  releaseContracts?:Contract[]=[]

  ngOnInit(): void {
   this.getRelease();

  }


  getRelease(){
    this.releaseService.getReleaseById(this.ocid!).subscribe(response => {
      this.releaseData = response.releases;
      var i=0
      this.releaseData?.forEach(item=>{
        item.contracts?.forEach(element => {
          this.releaseContracts!.push(element)
        });

        i++
      })
      console.log(response)
      this.isLoading=false;
      });
  }
}
