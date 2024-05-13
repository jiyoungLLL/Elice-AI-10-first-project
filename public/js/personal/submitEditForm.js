import { putData } from './putData.js';

export function submitEditForm(e, editedForm, info, getData) {
  e.preventDefault();
  // data PUT fetch
  switch (info) {
    case 'education':
      putData(editedForm, 'addedEducation', info, getData.userId, getData._id);
      break;
    case 'award':
      putData(editedForm, 'addedAward', info, getData.userId, getData._id);
      break;
    case 'certification':
      putData(
        editedForm,
        'addedCertificate',
        info,
        getData.userId,
        getData._id
      );
      break;
    case 'project':
      putData(editedForm, 'addedProject', info, getData.userId, getData._id);
      break;
    default:
      console.log('Unknown info type');
  }
}
