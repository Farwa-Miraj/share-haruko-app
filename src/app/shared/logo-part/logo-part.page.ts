import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-logo-part',
  templateUrl: './logo-part.page.html',
  styleUrls: ['./logo-part.page.scss'],
})
export class LogoPartPage implements OnInit {

  private destroy$ = new Subject<void>()


  constructor(   		
    private cd: ChangeDetectorRef,
    ) { }

  ngOnInit() {
    
  }


}
