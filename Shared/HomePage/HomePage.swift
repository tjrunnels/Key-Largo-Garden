//
//  HomePage.swift
//  Key Largo Garden
//
//  Created by Tom Runnels on 11/12/21.
//

import SwiftUI

struct HomePage: View {
    let skyBlue = Color(red: 0.3627, green: 0.6392, blue: 1.0)
    let skyGreen = Color(red: 0.5627, green: 0.9392, blue: 1.0)

    let headerHeight: CGFloat = 200

    var body: some View {
        ZStack {
            LinearGradient(gradient: Gradient(colors: [skyGreen, skyBlue]), startPoint: .bottomTrailing, endPoint: .topLeading)
                .opacity(0.7)
                .edgesIgnoringSafeArea(.all)
//
//            VStack{
//                Rectangle()
//                    .fill(Color.white)
//                    .frame(width: .infinity, height: headerHeight-50)
//                    .ignoresSafeArea(.all)
//                Spacer()
//
//            }

        
           
                VStack {
                    HeaderLogo(cornerVals: 40)
                        .edgesIgnoringSafeArea(.all)
                        .frame(height: headerHeight)
                    
                    ScrollView{
                        HomeExplorePlantsList(numOfObjects: 5)
                            .padding(.top, 15)
                        HomeWhatsNewList(numOfObjects: 10, listWidth: UIScreen.main.bounds.width)

                    }
                    
                }
            
        }
        .background(
            Image("acnhWallpaper")
               .opacity(0.5)
               .edgesIgnoringSafeArea(.all)
        )
        
    }
}

struct HomePage_Previews: PreviewProvider {
    static var previews: some View {
        HomePage()
    }
}
