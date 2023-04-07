import { StyleSheet } from 'react-native';
import { useState } from 'react';
import ProfileWrapper from './components/profile/ProfileWrapper';
import ProfileInfo from './components/profile/ProfileInfo';
import ProductGroupHorizontal from './components/product/ProductGroupHorizontal';
import ProductGroupGrid from './components/product/ProductGroupGrid';
import ThemeContext from './context/ThemeContext';
import { useContext, useEffect } from 'react';

function ProfileScreen() {
  const { setBackgroundColor } = useContext(ThemeContext);

  const [profileName, setProfileName] = useState('The Minds Of 99');
  const [bioText, setBioText] = useState('Infinity Action');
  const [coverImage, setCoverImage] = useState('https://soundvenue.com/wp-content/uploads/2021/09/MindsOf99Parken_ThomasRasmussen_Soundvenue19-2192x1233.jpg');
  const [contentStyle, setContentStyle] = useState({backgroundColor: 'white'});
  const [profileImage, setProfileImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZY428ECd_JC2xZz_1tX1UoL2HgHEROSenRkwGgg&s');
  const [allowEditing, setAllowEditing] = useState(true);

  useEffect(() => {
    // Todo: Change tab bar color when fetching a profile by using this
    setBackgroundColor('black'); 
  }, [])

  return (
      <ProfileWrapper 
        coverImage={coverImage}
        contentStyle={contentStyle}
        allowEditing={allowEditing}
        profileInfo={
          <ProfileInfo
            profileImage={profileImage}
            bioText={bioText}
            profileName={profileName}>
          </ProfileInfo>
      }>
        <ProductGroupHorizontal 
          headlineColor='black' 
          headline='Nyeste kopper'>
        </ProductGroupHorizontal>
        <ProductGroupGrid 
          headlineColor='black' 
          headline='Efterårskollektion'>
        </ProductGroupGrid>
      </ProfileWrapper>
    );
}

const styles = StyleSheet.create({

});

export default ProfileScreen;