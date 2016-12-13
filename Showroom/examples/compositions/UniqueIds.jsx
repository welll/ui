import React from 'react'
import * as Alert from '../../../Alert'
import {LIVE} from '../../variationTypes'

export default {
  title: 'UniqueIds',
  examples: {
    require: 'import * as Alert from \'@klarna/ui/Alert\'',
    type: LIVE,
    examples: {
      'Alert.Error': <Alert.Error id='alert-error'>
        <Alert.Title id='alert-error-title'>
          An error alert box heading
        </Alert.Title>
        <Alert.Paragraph id='alert-error-paragraph1'>
          Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert.Paragraph>
        <Alert.Paragraph id='alert-error-paragraph2'>
          ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em>
        </Alert.Paragraph>
      </Alert.Error>,

      'Alert.Warning': <Alert.Warning id='alert-warning'>
        <Alert.Title id='alert-warning-title'>
          An error alert box heading
        </Alert.Title>
        <Alert.Paragraph id='alert-warning-paragraph1'>
          Some text inside helps to get an idea of how the alert would look like. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert.Paragraph>
        <Alert.Paragraph id='alert-warning-paragraph2'>
          ID: <em>a4c531de-e35d-4901-93ae-44e32639b4b1</em>
        </Alert.Paragraph>
      </Alert.Warning>
    }
  }
}
