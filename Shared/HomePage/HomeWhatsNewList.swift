//
//  HomeWhatsNewList.swift
//  Key Largo Garden
//
//  Created by Tom Runnels on 11/12/21.
//


import SwiftUI

struct HomeWhatsNewList: View {
    var numOfObjects: Int
    var listWidth: CGFloat
    var body: some View {
        
        //object.  keeps the whitebox at the top
        VStack(alignment: .leading) {
            HStack {
                Text("What's New?")
                    .font(.largeTitle)
                    .bold()
                    .foregroundColor(.white)
                    .padding(.leading)
                Spacer()
            }
            
//            ScrollView {
 
                VStack {
                    ForEach((1...numOfObjects).reversed(), id: \.self) {
                        ChangeCard(name: "plant\(($0)%2 + 1)", size: 350)
                            .padding(.all, 7)
                        }
                    HStack {
                        Image(systemName: "arrow.right.circle")
                            .resizable()
                            .frame(width: 40, height: 40)
                        Text("See All")
                            .font(.title2)
                    }
                    .foregroundColor(.white)
                    .padding()
                }
                .frame(width: listWidth)
//            }
            
        }
        
        
        
    }
}

struct HomeWhatsNewList_Previews: PreviewProvider {
    static var previews: some View {
        
        
        ZStack{
            
            Rectangle()
                .fill(
                    .clear
                )
                .frame(width: 400, height: 1000)
                .background(
                    LinearGradient(gradient: Gradient(colors: [.blue, .green]), startPoint: .bottomTrailing, endPoint: .topLeading)
                        .opacity(0.7)
                        .edgesIgnoringSafeArea(.all)
                )
            
            VStack {
                HomeWhatsNewList(numOfObjects: 4, listWidth: UIScreen.main.bounds.width)
                Spacer()
            }
            
            
        
        }
        .previewLayout(.fixed(width: 400, height: 1000))
           
    }
}
