

interface Sources {
  key1: string;
  // key2: string;
  // key3: string;
  // key4: string;
  // key5: string;
  // key6: string;
  // key7: string;
  // key8: string;
  // key9: string;
  // key10: string;
  // key11: string;
  // key12: string;
  // key13: string;
  // key14: string;
  // key15: string;
  // key16: string;
  // key17: string;
  // key18: string;
  // key19: string;
  // key20: string;
  // key21: string;
  // key22: string;
  // key23: string;
  // key24: string;
  // key25: string;
  // key26: string;
  // key27: string;
  // key28: string;
  // key29: string;
  // key30: string;
  // key31: string;
  // key32: string;

}


export class ScriptService {
  public sources: Sources;

  constructor() {

    console.log("ScriptService");

    this.sources = {

      key1: "assets/niceadmin/js/jquery.js",
      // key2: "assets/niceadmin/js/jquery-ui-1.10.4.min.js",
      // key3: "assets/niceadmin/js/jquery-1.8.3.min.js",
      // key4: "assets/niceadmin/js/jquery-ui-1.9.2.custom.min.js",
      // key5: "assets/niceadmin/js/bootstrap.min.js",
      // key6: "assets/niceadmin/js/jquery.scrollTo.min.js",
      // key7: "assets/niceadmin/js/jquery.nicescroll.js",
      // key8: "assets/niceadmin/assets/jquery-knob/js/jquery.knob.js",
      // key9: "assets/niceadmin/js/jquery.sparkline.js",
      // key10: "assets/niceadmin/assets/jquery-easy-pie-chart/jquery.easy-pie-chart.js",
      // key11: "assets/niceadmin/js/owl.carousel.js",
      // key12: "assets/niceadmin/js/fullcalendar.min.js",
      // key13: "assets/niceadmin/assets/fullcalendar/fullcalendar/fullcalendar.js",
      // key14: "assets/niceadmin/js/calendar-custom.js",
      // key15: "assets/niceadmin/js/jquery.rateit.min.js",
      // key16: "assets/niceadmin/js/jquery.customSelect.min.js",
      // key17: "assets/niceadmin/assets/chart-master/Chart.js",
      // key18: "assets/niceadmin/js/sparkline-chart.js",
      // key19: "assets/niceadmin/js/easy-pie-chart.js",
      // key20: "assets/niceadmin/js/jquery-jvectormap-1.2.2.min.js",
      // key21: "assets/niceadmin/js/jquery-jvectormap-world-mill-en.js",
      // key22: "assets/niceadmin/js/xcharts.min.js",
      // key23: "assets/niceadmin/js/jquery.autosize.min.js",
      // key24: "assets/niceadmin/js/jquery.placeholder.min.js",
      // key25: "assets/niceadmin/js/gdp-data.js",
      // key26: "assets/niceadmin/js/morris.min.js",
      // key27: "assets/niceadmin/js/sparklines.js",
      // key28: "assets/niceadmin/js/charts.js",
      // key29: "assets/niceadmin/js/jquery.slimscroll.min.js",
      // key30: "assets/niceadmin/js/scripts.js",
      // key31: "assets/niceadmin/js/scripts2.js",
      // key32: "assets/niceadmin/js/chartjs-custom.js",
    };
  }

  public load(src: string): void {
    this.loadScript(src);
  }

  public loadScripts(): void {
      this.load(this.sources.key1);
      // this.load(this.sources.key2);
      // this.load(this.sources.key3);
      // this.load(this.sources.key4);
      // this.load(this.sources.key5);
      // this.load(this.sources.key6);
      // this.load(this.sources.key7);
      // this.load(this.sources.key8);
      // this.load(this.sources.key9);
      // this.load(this.sources.key10);
      // this.load(this.sources.key11);
      // this.load(this.sources.key12);
      // this.load(this.sources.key13);
      // this.load(this.sources.key14);
      // this.load(this.sources.key15);
      // this.load(this.sources.key16);
      // this.load(this.sources.key17);
      // this.load(this.sources.key18);
      // this.load(this.sources.key19);
      // this.load(this.sources.key20);
      // this.load(this.sources.key21);
      // this.load(this.sources.key22);
      // this.load(this.sources.key23);
      // this.load(this.sources.key24);
      // this.load(this.sources.key25);
      // this.load(this.sources.key26);
      // this.load(this.sources.key27);
      // this.load(this.sources.key28);
      // this.load(this.sources.key29);
      // this.load(this.sources.key30);
      // this.load(this.sources.key31);
  }

  private loadScript(src: string): void {
    console.log('ScriptService loadScript', src);
    if (this.isScriptLoaded(src)) {
      let script: any = document.querySelector('script[src="' + src + '"]');
      script.parentNode.removeChild(script);
    }

    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = src;
    script.async = false;
    script.defer = false;
    body.appendChild(script);
  }

  private isScriptLoaded(src: string): boolean {
    return document.querySelector('script[src="' + src + '"]') ? true : false;
  }
}
