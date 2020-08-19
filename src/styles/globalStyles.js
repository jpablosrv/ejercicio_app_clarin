import { StyleSheet, Dimensions } from 'react-native';
import { AppColors } from './appColors';

const altoPantalla = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColors.colors.green_ole
  },
  listaVideosHomeContainer: {
    flex: 1
  },
  itemContainer:{
    height: 200,
    borderWidth: 2,
    borderColor: AppColors.colors.dark_grey,
    marginVertical: 10,
    backgroundColor: AppColors.colors.dark_green_ole
  },
  //ModalVideo
  modalVideoContainer: {
    padding: 8,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  modal:{ 
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: AppColors.colors.white    
  },
  imgVideo:{
    height: '100%'
  },
  playContainer: {
    flex: 1,

  },
  videoScreenContainer: {
    width: '100%',
    height: altoPantalla * 0.7
  },
  backgroundVideo: {

  },
  title: {
    alignSelf: 'center',
    fontSize: 20
  }
});
