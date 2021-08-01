import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
//  import {Bold} from '@ckeditor/ckeditor5-basic-styles/src/';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

// import {Alignment} from '@ckeditor/ckeditor5-alignment/';     // <--- ADDED

export default function Test() {
  return (
    ClassicEditor
    .create( document.querySelector( '#editor' ), {
        // plugins: [  Alignment],     // <--- MODIFIED
        // toolbar: [  'Alignment' ]                       // <--- MODIFIED
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } )
  )
}

