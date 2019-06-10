import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-size-formatter',
  templateUrl: './file-size-formatter.component.html',
  styleUrls: ['./file-size-formatter.component.scss']
})
export class FileSizeFormatterComponent implements OnInit {
  fileSizes: number [] = [
    1024,
    1048576,
    500,
    5073741824
  ];

  inputText = '';

  getColorByFileSize(fileSize): string {
    return fileSize > 1024 ? 'red' : 'green';
  }

  onSubmitFileSize(): void {
    const text = this.inputText;
    if (text) {
      this.fileSizes.push(+this.inputText);
      this.inputText = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
