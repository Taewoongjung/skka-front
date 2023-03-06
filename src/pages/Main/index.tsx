import React, {useEffect, useState} from 'react';
import {useObserver} from 'mobx-react';

const Main = () => {

  useEffect(() => {

  }, [])

  return useObserver(() => (
      <div className="App">

      </div>
  ));
}

export default Main;