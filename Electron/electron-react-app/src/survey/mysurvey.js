import React, { useRef } from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import json from './questions'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

const MySurvey = ({ showModal, setShowModal }) => {
    const modalRef = useRef()

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }
    return (
        <>
            {
                showModal ? (
                    <Background ref={modalRef} onClick={closeModal}>
                        <ModalWrapper showModal={showModal}>
                            <Survey.Survey
                                json={json}
                            />
                            <CloseModalButton
                                onClick={() => setShowModal(prev => !prev)}
                            ></CloseModalButton>
                        </ModalWrapper>

                    </Background>
                ) : null
            }

        </>
    )
}

export default MySurvey

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    position: relative;
    z-index: 10;
    overflow-y: auto;
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`