import React from 'react'
import { Modal } from 'react-native'
import globalStyles from '../styles/globalStyles'
import Video from 'react-native-video'

const ModalVideo = ({showModal, modalTitle, urlVideo}) => {
    return (
        <>
            <Modal style={globalStyles.modalVideoContainer} isOpen={showModal}>
                <View style={globalStyles.modal}>
                    <Text style={globalStyles.modalTitle}>{modalTitle}</Text>
                    <Video
                        
                    />
                    
                </View>
            </Modal>
        </>
    )
}

export default ModalVideo

                    {/* <View style={[modalStyles.buttonContainer]}>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={[modalStyles.button, modalStyles.buttonMain]}>ACEPTAR</Text>
                        </TouchableOpacity>
                    </View> */}
