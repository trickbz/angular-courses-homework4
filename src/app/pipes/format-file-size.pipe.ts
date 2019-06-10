import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFileSize'
})
export class FormatFileSizePipe implements PipeTransform {

  transform(fileSize: number): any {
    const kbInMb = 1024;
    const kbInGb = 1048576;
    const kbInTb = 1073741824;
    let suffix = '';
    let formattedFileSize = fileSize;

    if (fileSize < kbInMb) {
      suffix = 'KB';
    } else if (fileSize >= kbInMb && fileSize < kbInGb) {
      formattedFileSize = fileSize / kbInMb;
      suffix = 'MB';
    } else if (fileSize >= kbInGb && fileSize < kbInTb) {
      formattedFileSize = fileSize / kbInGb;
      suffix = 'GB';
    } else {
      formattedFileSize = fileSize / kbInTb;
      suffix = 'TB';
    }

    return `${formattedFileSize.toFixed(2)} ${suffix}`;
  }

}
