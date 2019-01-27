import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  constructor() { }
  data = [];
  ngOnInit() {
    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.data = [
      {
        'id': '5c4aaf9dd2f91a1b556acbbf',
        'age': 20,
        'name': 'Wallace Mcfarland',
        'email': 'wallacemcfarland@printspan.com',
        'phone': '+66 (811) 463-3047'
      },
      {
        'id': '5c4aaf9d2fbd7976c432e205',
        'age': 35,
        'name': 'Atkinson Parker',
        'email': 'atkinsonparker@printspan.com',
        'phone': '+66 (805) 417-2319'
      },
      {
        'id': '5c4aaf9d6e63bdc8610a0885',
        'age': 34,
        'name': 'Dominique Spence',
        'email': 'dominiquespence@printspan.com',
        'phone': '+66 (807) 403-2374'
      },
      {
        'id': '5c4aaf9d0fc42f678bea0370',
        'age': 38,
        'name': 'Meyer Bolton',
        'email': 'meyerbolton@printspan.com',
        'phone': '+66 (837) 557-3168'
      },
      {
        'id': '5c4aaf9d0cde97b43de24080',
        'age': 29,
        'name': 'Merrill Baxter',
        'email': 'merrillbaxter@printspan.com',
        'phone': '+66 (941) 585-3204'
      },
      {
        'id': '5c4aaf9d2b030a1dd2d41b79',
        'age': 38,
        'name': 'Shannon Blake',
        'email': 'shannonblake@printspan.com',
        'phone': '+66 (944) 569-2172'
      },
      {
        'id': '5c4aaf9df8b9bfc0dc4bc03d',
        'age': 28,
        'name': 'Norman Roach',
        'email': 'normanroach@printspan.com',
        'phone': '+66 (897) 424-3513'
      },
      {
        'id': '5c4aaf9df9eeac03013bc1f0',
        'age': 30,
        'name': 'Hart Lester',
        'email': 'hartlester@printspan.com',
        'phone': '+66 (912) 452-3969'
      },
      {
        'id': '5c4aaf9d2cad2ad4bc5a498e',
        'age': 24,
        'name': 'Ella Stephens',
        'email': 'ellastephens@printspan.com',
        'phone': '+66 (911) 567-3589'
      },
      {
        'id': '5c4aaf9d026d513d15829a8a',
        'age': 20,
        'name': 'Daniel Austin',
        'email': 'danielaustin@printspan.com',
        'phone': '+66 (941) 588-2845'
      },
      {
        'id': '5c4aaf9d0f44664eb29d9468',
        'age': 28,
        'name': 'Lucia Cochran',
        'email': 'luciacochran@printspan.com',
        'phone': '+66 (907) 435-2161'
      },
      {
        'id': '5c4aaf9dd7defb4c41872ec4',
        'age': 40,
        'name': 'Lynda Bean',
        'email': 'lyndabean@printspan.com',
        'phone': '+66 (986) 549-2591'
      },
      {
        'id': '5c4aaf9dc8ce5460dcf4a5a1',
        'age': 39,
        'name': 'Effie Rios',
        'email': 'effierios@printspan.com',
        'phone': '+66 (894) 437-3833'
      },
      {
        'id': '5c4aaf9dfacd1a0fcb046655',
        'age': 36,
        'name': 'Griffin Serrano',
        'email': 'griffinserrano@printspan.com',
        'phone': '+66 (924) 570-2826'
      },
      {
        'id': '5c4aaf9d107d0ac8df6fa8d9',
        'age': 21,
        'name': 'Gabriela Mitchell',
        'email': 'gabrielamitchell@printspan.com',
        'phone': '+66 (865) 481-2064'
      },
      {
        'id': '5c4aaf9dc085fdc88e64eab2',
        'age': 33,
        'name': 'Pierce Galloway',
        'email': 'piercegalloway@printspan.com',
        'phone': '+66 (901) 553-3202'
      },
      {
        'id': '5c4aaf9d4a6fffcbf4694c98',
        'age': 40,
        'name': 'Carr Bright',
        'email': 'carrbright@printspan.com',
        'phone': '+66 (819) 594-3033'
      },
      {
        'id': '5c4aaf9d3c4a646e0244c97e',
        'age': 34,
        'name': 'Gould May',
        'email': 'gouldmay@printspan.com',
        'phone': '+66 (868) 410-2792'
      },
      {
        'id': '5c4aaf9d6a14ea18e58c5cb5',
        'age': 35,
        'name': 'Tamara Carlson',
        'email': 'tamaracarlson@printspan.com',
        'phone': '+66 (920) 466-2685'
      },
      {
        'id': '5c4aaf9d0abc88961c07d34e',
        'age': 35,
        'name': 'Adams Heath',
        'email': 'adamsheath@printspan.com',
        'phone': '+66 (909) 588-3430'
      },
      {
        'id': '5c4aaf9d327830fad5957bb2',
        'age': 32,
        'name': 'Bowen Cole',
        'email': 'bowencole@printspan.com',
        'phone': '+66 (854) 590-2874'
      },
      {
        'id': '5c4aaf9d37c6fbee42d12fbf',
        'age': 35,
        'name': 'Burnett Burt',
        'email': 'burnettburt@printspan.com',
        'phone': '+66 (875) 406-2219'
      },
      {
        'id': '5c4aaf9db43e9185a11f149e',
        'age': 36,
        'name': 'Katelyn Valdez',
        'email': 'katelynvaldez@printspan.com',
        'phone': '+66 (948) 427-3463'
      },
      {
        'id': '5c4aaf9d72d2f690eb464f4d',
        'age': 38,
        'name': 'Booker Johnston',
        'email': 'bookerjohnston@printspan.com',
        'phone': '+66 (861) 486-2162'
      },
      {
        'id': '5c4aaf9da0b17c578a7c7088',
        'age': 22,
        'name': 'Winifred Dunn',
        'email': 'winifreddunn@printspan.com',
        'phone': '+66 (898) 407-2784'
      },
      {
        'id': '5c4aaf9d482fac2b33686360',
        'age': 39,
        'name': 'Jefferson Mccall',
        'email': 'jeffersonmccall@printspan.com',
        'phone': '+66 (991) 404-3802'
      },
      {
        'id': '5c4aaf9d403eac6c87699e17',
        'age': 32,
        'name': 'Elinor Soto',
        'email': 'elinorsoto@printspan.com',
        'phone': '+66 (963) 419-2686'
      },
      {
        'id': '5c4aaf9d347f8d1873b9ecd7',
        'age': 37,
        'name': 'Hunt Daniel',
        'email': 'huntdaniel@printspan.com',
        'phone': '+66 (967) 574-2900'
      },
      {
        'id': '5c4aaf9d5fd2a8b4333cd225',
        'age': 25,
        'name': 'Clara Nicholson',
        'email': 'claranicholson@printspan.com',
        'phone': '+66 (988) 503-2566'
      },
      {
        'id': '5c4aaf9dc5339d09070194a5',
        'age': 35,
        'name': 'Carlson Mccarthy',
        'email': 'carlsonmccarthy@printspan.com',
        'phone': '+66 (989) 564-3990'
      },
      {
        'id': '5c4aaf9d68be6473a60016d0',
        'age': 25,
        'name': 'Inez Small',
        'email': 'inezsmall@printspan.com',
        'phone': '+66 (920) 472-3906'
      },
      {
        'id': '5c4aaf9d843dfea1e0579a55',
        'age': 38,
        'name': 'Jeannie Griffin',
        'email': 'jeanniegriffin@printspan.com',
        'phone': '+66 (953) 492-3999'
      },
      {
        'id': '5c4aaf9d139c489af378fc87',
        'age': 30,
        'name': 'Reed Mcmahon',
        'email': 'reedmcmahon@printspan.com',
        'phone': '+66 (996) 469-3765'
      },
      {
        'id': '5c4aaf9d017e26828338f7e2',
        'age': 37,
        'name': 'Hahn Nolan',
        'email': 'hahnnolan@printspan.com',
        'phone': '+66 (949) 525-2775'
      },
      {
        'id': '5c4aaf9d71d124cd65008bef',
        'age': 31,
        'name': 'Blanchard Sellers',
        'email': 'blanchardsellers@printspan.com',
        'phone': '+66 (941) 547-3292'
      },
      {
        'id': '5c4aaf9de32aa312a48e43ec',
        'age': 29,
        'name': 'Gwen Mills',
        'email': 'gwenmills@printspan.com',
        'phone': '+66 (886) 453-3174'
      },
      {
        'id': '5c4aaf9dd6bc185d627fd8c7',
        'age': 31,
        'name': 'Suzanne Patton',
        'email': 'suzannepatton@printspan.com',
        'phone': '+66 (926) 581-2730'
      },
      {
        'id': '5c4aaf9d94cf9f1243de95c6',
        'age': 31,
        'name': 'Eddie Francis',
        'email': 'eddiefrancis@printspan.com',
        'phone': '+66 (838) 574-3472'
      },
      {
        'id': '5c4aaf9df5a15732072ab9f0',
        'age': 26,
        'name': 'Finley Bradford',
        'email': 'finleybradford@printspan.com',
        'phone': '+66 (824) 514-3862'
      },
      {
        'id': '5c4aaf9d7444c0c29af2d1c8',
        'age': 39,
        'name': 'Cash Crane',
        'email': 'cashcrane@printspan.com',
        'phone': '+66 (933) 573-3323'
      },
      {
        'id': '5c4aaf9d00437dd9dbcdf2ed',
        'age': 31,
        'name': 'Bullock Wright',
        'email': 'bullockwright@printspan.com',
        'phone': '+66 (811) 556-2967'
      },
      {
        'id': '5c4aaf9d2125cb9c43f18779',
        'age': 30,
        'name': 'Nelson Odonnell',
        'email': 'nelsonodonnell@printspan.com',
        'phone': '+66 (992) 406-2058'
      },
      {
        'id': '5c4aaf9d7c769a8c9d96ef85',
        'age': 29,
        'name': 'Felecia Davidson',
        'email': 'feleciadavidson@printspan.com',
        'phone': '+66 (995) 454-3043'
      },
      {
        'id': '5c4aaf9db06132b6a91b637c',
        'age': 29,
        'name': 'Porter Guerra',
        'email': 'porterguerra@printspan.com',
        'phone': '+66 (991) 549-2337'
      },
      {
        'id': '5c4aaf9d135a08a7c545f9ed',
        'age': 32,
        'name': 'Sharpe Kidd',
        'email': 'sharpekidd@printspan.com',
        'phone': '+66 (905) 507-3195'
      },
      {
        'id': '5c4aaf9dd773d1e438972c8a',
        'age': 28,
        'name': 'Kristy Hudson',
        'email': 'kristyhudson@printspan.com',
        'phone': '+66 (809) 477-2429'
      },
      {
        'id': '5c4aaf9d0d187feac99289e9',
        'age': 25,
        'name': 'Greta Farmer',
        'email': 'gretafarmer@printspan.com',
        'phone': '+66 (807) 554-2324'
      },
      {
        'id': '5c4aaf9d589578917b54d69f',
        'age': 23,
        'name': 'Cruz Cross',
        'email': 'cruzcross@printspan.com',
        'phone': '+66 (916) 526-3284'
      },
      {
        'id': '5c4aaf9de08b1c123affc8b1',
        'age': 32,
        'name': 'Crane Garrison',
        'email': 'cranegarrison@printspan.com',
        'phone': '+66 (982) 497-3230'
      },
      {
        'id': '5c4aaf9dc822daccc9e290b7',
        'age': 38,
        'name': 'Linda Williams',
        'email': 'lindawilliams@printspan.com',
        'phone': '+66 (978) 596-3861'
      },
      {
        'id': '5c4aaf9d8d5f59fce9fdfaea',
        'age': 25,
        'name': 'Sonia Watson',
        'email': 'soniawatson@printspan.com',
        'phone': '+66 (896) 501-3753'
      },
      {
        'id': '5c4aaf9df53a5ef4a2e8f10b',
        'age': 20,
        'name': 'Pugh Franco',
        'email': 'pughfranco@printspan.com',
        'phone': '+66 (838) 510-3015'
      },
      {
        'id': '5c4aaf9db3d12fa9439d7499',
        'age': 22,
        'name': 'Newton Rutledge',
        'email': 'newtonrutledge@printspan.com',
        'phone': '+66 (924) 467-2603'
      },
      {
        'id': '5c4aaf9d9db11588df398262',
        'age': 33,
        'name': 'Paula Wilkins',
        'email': 'paulawilkins@printspan.com',
        'phone': '+66 (935) 423-3874'
      },
      {
        'id': '5c4aaf9da754990989824567',
        'age': 24,
        'name': 'Annmarie Humphrey',
        'email': 'annmariehumphrey@printspan.com',
        'phone': '+66 (917) 584-2479'
      },
      {
        'id': '5c4aaf9d4cec423c9f9a5b1a',
        'age': 29,
        'name': 'Caroline Garcia',
        'email': 'carolinegarcia@printspan.com',
        'phone': '+66 (931) 575-2771'
      },
      {
        'id': '5c4aaf9da46983fa51bbb59b',
        'age': 30,
        'name': 'Joyce Blankenship',
        'email': 'joyceblankenship@printspan.com',
        'phone': '+66 (937) 540-2146'
      },
      {
        'id': '5c4aaf9ddf424e7e0016a30b',
        'age': 37,
        'name': 'Janine Parrish',
        'email': 'janineparrish@printspan.com',
        'phone': '+66 (894) 558-2338'
      },
      {
        'id': '5c4aaf9dd03a63c3eee5ac9c',
        'age': 27,
        'name': 'Arline Pruitt',
        'email': 'arlinepruitt@printspan.com',
        'phone': '+66 (804) 464-2174'
      },
      {
        'id': '5c4aaf9d0d775407e14b3813',
        'age': 31,
        'name': 'Sheree Kinney',
        'email': 'shereekinney@printspan.com',
        'phone': '+66 (800) 478-3008'
      },
      {
        'id': '5c4aaf9dd7d41508e5da56b8',
        'age': 22,
        'name': 'Morin Mckay',
        'email': 'morinmckay@printspan.com',
        'phone': '+66 (906) 404-3300'
      },
      {
        'id': '5c4aaf9d94272a588da50e84',
        'age': 38,
        'name': 'Dennis Poole',
        'email': 'dennispoole@printspan.com',
        'phone': '+66 (811) 579-2527'
      },
      {
        'id': '5c4aaf9deda7d72f97720abc',
        'age': 29,
        'name': 'Osborn Whitley',
        'email': 'osbornwhitley@printspan.com',
        'phone': '+66 (980) 534-2910'
      },
      {
        'id': '5c4aaf9d22b59e9f6ba09b63',
        'age': 23,
        'name': 'Kelley Dale',
        'email': 'kelleydale@printspan.com',
        'phone': '+66 (826) 571-2897'
      },
      {
        'id': '5c4aaf9d77c11c875bb2f25f',
        'age': 30,
        'name': 'Parks Kaufman',
        'email': 'parkskaufman@printspan.com',
        'phone': '+66 (931) 457-2736'
      },
      {
        'id': '5c4aaf9ddaa4af52f80ff959',
        'age': 20,
        'name': 'Hunter Rice',
        'email': 'hunterrice@printspan.com',
        'phone': '+66 (899) 407-3404'
      },
      {
        'id': '5c4aaf9d5df35ceaba8d5aaa',
        'age': 29,
        'name': 'Keri Fischer',
        'email': 'kerifischer@printspan.com',
        'phone': '+66 (817) 435-2236'
      },
      {
        'id': '5c4aaf9d7310dc495af9feae',
        'age': 30,
        'name': 'Stefanie Castro',
        'email': 'stefaniecastro@printspan.com',
        'phone': '+66 (848) 428-2393'
      },
      {
        'id': '5c4aaf9df9450254b8df5eec',
        'age': 31,
        'name': 'Rosemary Harris',
        'email': 'rosemaryharris@printspan.com',
        'phone': '+66 (850) 544-2288'
      },
      {
        'id': '5c4aaf9d1dc41e17bc1376e3',
        'age': 21,
        'name': 'Jackson Estrada',
        'email': 'jacksonestrada@printspan.com',
        'phone': '+66 (838) 503-3494'
      },
      {
        'id': '5c4aaf9dcdcb41dfcb4695d4',
        'age': 38,
        'name': 'Figueroa Ewing',
        'email': 'figueroaewing@printspan.com',
        'phone': '+66 (871) 577-2291'
      },
      {
        'id': '5c4aaf9d611b840c93c9e4e4',
        'age': 32,
        'name': 'Bette Ramirez',
        'email': 'betteramirez@printspan.com',
        'phone': '+66 (960) 400-3478'
      },
      {
        'id': '5c4aaf9d7307b2eb44a5618f',
        'age': 32,
        'name': 'Pam Ferguson',
        'email': 'pamferguson@printspan.com',
        'phone': '+66 (889) 534-3957'
      },
      {
        'id': '5c4aaf9db36e85cf9fee3775',
        'age': 39,
        'name': 'Valerie Sosa',
        'email': 'valeriesosa@printspan.com',
        'phone': '+66 (909) 430-2299'
      },
      {
        'id': '5c4aaf9d746ca15b64bf09b4',
        'age': 27,
        'name': 'Kay Montoya',
        'email': 'kaymontoya@printspan.com',
        'phone': '+66 (917) 407-3056'
      },
      {
        'id': '5c4aaf9db56a15c72b10f42f',
        'age': 38,
        'name': 'Cook Larsen',
        'email': 'cooklarsen@printspan.com',
        'phone': '+66 (834) 437-3916'
      },
      {
        'id': '5c4aaf9d0b5f6cd10baac857',
        'age': 28,
        'name': 'Clemons Payne',
        'email': 'clemonspayne@printspan.com',
        'phone': '+66 (883) 574-2558'
      },
      {
        'id': '5c4aaf9d0d7007f8e1ce48ea',
        'age': 34,
        'name': 'Bryan Hodges',
        'email': 'bryanhodges@printspan.com',
        'phone': '+66 (989) 456-3503'
      },
      {
        'id': '5c4aaf9da011006c739f3f19',
        'age': 32,
        'name': 'Huber Strickland',
        'email': 'huberstrickland@printspan.com',
        'phone': '+66 (890) 405-3269'
      },
      {
        'id': '5c4aaf9d148889e35bc8d223',
        'age': 24,
        'name': 'Chambers Chambers',
        'email': 'chamberschambers@printspan.com',
        'phone': '+66 (963) 573-3233'
      },
      {
        'id': '5c4aaf9d742ae3e812bde915',
        'age': 38,
        'name': 'Rocha Sanders',
        'email': 'rochasanders@printspan.com',
        'phone': '+66 (967) 446-3705'
      },
      {
        'id': '5c4aaf9d40cdf15c9785cb5c',
        'age': 25,
        'name': 'Lara Weber',
        'email': 'laraweber@printspan.com',
        'phone': '+66 (840) 584-3328'
      },
      {
        'id': '5c4aaf9deade8db2c2007724',
        'age': 21,
        'name': 'Peterson Mcconnell',
        'email': 'petersonmcconnell@printspan.com',
        'phone': '+66 (861) 517-2861'
      }
    ];
  }
}

