import React, { useEffect, useState } from 'react';
import { Logo, ErrorTitle } from '../../components/common/Pages.styles';

import theme from '../../styles/theme';
import {
  Content,
  Main,
  Menu,
  MenuItem,
  Sidebar,
  SubTitle,
  Title,
  UserWrapper,
} from './Profile.styles';

import clientsIcon from '../../assets/icons/clients.svg';
import doctorsIcon from '../../assets/icons/doctors.svg';
import recordsIcon from '../../assets/icons/records.svg';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DoctorsList from '../../components/DoctorsList/DoctorsList';
import RecordsList from '../../components/RecordsList/RecordsList';

const Profile: React.FC = (): JSX.Element => {
  const categories = ['Врачи', 'Пациенты', 'Записи'];
  const icons = [doctorsIcon, clientsIcon, recordsIcon];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const accessToken = localStorage.getItem('accessToken');

  const history = useHistory();

  const error = useSelector<RootState>((state) => state.profile.error);

  useEffect(() => {
    if (!accessToken) {
      history.push('/');
    }
  });

  return (
    <UserWrapper>
      <Main>
        <Sidebar>
          <Logo
            lightBlack={theme.colors.lightBlack}
            lightGreen={theme.colors.lightGreen}
            fz={20}
            mb={50}>
            ClinicTrack<span>.</span>
          </Logo>
          <SubTitle>Основное</SubTitle>
          <Menu>
            {categories.map((category, i) => (
              <MenuItem
                icon={icons[i]}
                active={category === activeCategory}
                onClick={() => setActiveCategory(category)}>
                {category}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
        <Content>
          <Title>{activeCategory}</Title>
          {error && (
            <ErrorTitle>Возникла ошибка при загрузке данных</ErrorTitle>
          )}
          {activeCategory === categories[0] && (
            <DoctorsList accessToken={accessToken} />
          )}
          {activeCategory === categories[1] && (
            <ErrorTitle>Список пуст</ErrorTitle>
          )}
          {activeCategory === categories[2] && (
            <RecordsList accessToken={accessToken} />
          )}
        </Content>
      </Main>
    </UserWrapper>
  );
};

export default Profile;
